"use client";

import { translate } from "@/app/action/translate";
import { useActionState } from "react";
import SelectTool from "./SelectTool";
import { motion } from "motion/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    image: z.custom<FileList>()
        .refine(files => files.length > 0, { message: 'Image is required.' })
        .refine(files => files[0].type.startsWith('image/'), { message: 'The provided file is not an image.' })
        .refine(files => files[0].size <= 5000000, { message: 'Max image size is 5MB.' }),
    originalText: z.string().optional(),
    translatedText: z.string().optional(),
});
type FormValues = z.infer<typeof formSchema>;

export default function TranslateForm() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        setValue
    } = useForm({resolver: zodResolver(formSchema)})

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
           try{
               const {original, translation} = await translate(data.image[0])
                setValue("originalText", original)
                setValue("translatedText", translation)
           }catch (e) {
              console.error(e);
           }
    }

    return (
        <motion.div className="hero bg-base-200 h-full">
            <div className="hero-content text-center">
                <div className="max-w-md flex flex-col space-y-4">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={"space-y-2"}
                    >
                        <h1 className={"text-2xl font-bold"}>
                            Import a Image to Translate
                        </h1>
                        <SelectTool isPending={isSubmitting} />
                        <input
                            {...register("image")}
                            type="file"
                            disabled={isSubmitting}
                            accept={"image/png"}
                            name={"image"}
                            className="file-input"
                        />
                        {errors.image?.message &&
                            (
                                <div>{errors.image.message}</div>
                            )}

                        <div>
                            <button
                                type={"submit"}
                                className={`${isSubmitting ? "pointer-events-none" : ""} btn btn-primary min-w-24`}
                            >
                                {isSubmitting ? (
                                    <span className="loading loading-dots loading-sm"></span>
                                ) : (
                                    "Translate"
                                )}
                            </button>
                        </div>
                        <div className={"flex flex-col items-center"}>
                            <div className="text-2xl font-bold">Translation</div>
                            <div className={"flex flex-row space-x-2"}>
                        <textarea
                            {...register("originalText")}
                            readOnly={true}
                            disabled={isSubmitting}
                            className="textarea p-4 mt-2"
                            placeholder="">
                        </textarea>
                                <textarea
                                    {...register("translatedText")}
                                    readOnly={true}
                                    disabled={isSubmitting}
                                    className="textarea p-4 mt-2"
                                    placeholder="">

                            </textarea>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </motion.div>
    );
}
