"use server";

import { createWorker } from "tesseract.js";
import * as deepl from "deepl-node";
export type FormState =
    | {
    original?: string;
    translation?: string;
    message?: string;
}
    | undefined;

export async function translate(prevState: FormState, formData: FormData) {
    const worker = await createWorker(["eng", "chi_tra"]);

    const imageToTranslate = formData.get("image") as File;
    if (!imageToTranslate) {
        return { message: "Not file uploaded" };
    }
/*
    const translator = new deepl.Translator(process.env.DEEPL_API_KEY as string);
*/
    const data = await imageToTranslate.arrayBuffer();
    const image = Buffer.from(data);
    console.log("Sending image to worker....");
    const result = await worker.recognize(image);
    console.log(result);
    await worker.terminate();
  /*  const translation = await translator.translateText(
        result.data.text,
        "zh",
        "en-US",
    );*/

    return { original: result.data.text, translation: "WIP" };
}
