import supabase, { supabaseUrl } from "./supabase"

// Fetches all the cabins from the database
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*")

  if (error) {
    console.error(error)
    throw new Error("Cabins could not be loaded!")
  }

  return data
}

// Creates a new cabin in the database
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  )

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`

  let query = supabase.from("cabins")

  if (!id) query = query.insert([{ ...newCabin, image: imagePath }])

  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id)
    //   .select()
  }

  const { data, error } = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error("Cabin could not be created!")
  }

  if (hasImagePath) return data

  // Upload the cabin image to the storage
  const { error: imageUploadError } = await supabase.storage
    .from("cabins")
    .upload(imageName, newCabin.image)

  if (imageUploadError) {
    // If image upload fails, delete the newly created cabin from the database
    await supabase.from("cabins").delete().eq("id", data.id)
    console.error(imageUploadError)
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created!"
    )
  }

  return data
}

// Deletes a cabin from the database based on its ID
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id)

  if (error) {
    console.error(error)
    throw new Error("Cabin could not be deleted!")
  }

  return data
}
