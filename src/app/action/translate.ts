"use server";

import { createWorker } from "tesseract.js";


export async function translate(imageToTranslate: File) {
    const worker = await createWorker(["eng", "chi_tra"]);

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
