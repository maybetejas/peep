import { error, redirect } from "@sveltejs/kit";
import { generateUserName } from "../../lib/utils";

export const actions = {
  register: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());

    let username = generateUserName(
      body.name.split(" ").join("")
    ).toLowerCase();

    try {
      await locals.pb.collection("users").create({ username, ...body });
      await locals.pb.collection("users").requestVerification(body.email);
    } catch (err) {
      console.log("Error: ", err);
      throw error(500, "Something went wrong");
    }

    throw redirect(303, "/login");
  },
};
