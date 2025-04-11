'use client'
import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Image from 'next/image';
import { IoMdCheckmarkCircle } from "react-icons/io";



export default function Form({onSubmit}) {
    const { register, handleSubmit, watch, formState: { errors }, resetField } = useForm();
    const profilePic = watch("profilePic");
    const [userImage, setUserImage] = useState(null);
    const hasImage = profilePic?.[0];

    const handleFormSubmit = (data) => {
        if (data.profilePic && data.profilePic[0]) {
            const imageUrl = URL.createObjectURL(data.profilePic[0]);
            const userData = {
                ...data,
                profilePic: imageUrl,
            };
            onSubmit(userData);
        }
    };

    const handleRemoveImage = () => {
        setUserImage(null);
        resetField("profilePic");
    };
    

  return (
        <div className='flex flex-col items-center h-screen w-full md:w-5xl  z-20'>
            <Image src="/logo-full.svg" alt="Picture of the author" width={100} height={100} className='h-10 w-auto my-8' />
            <div className='text-center grid gap-5 p-3'> 
                <h1 className='text-2xl md:text-5xl font-semibold'>Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className='text-xl text-gray-400'>Secure Your spot at next year's biggest coding conference.</p>
            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)} className='flex mt-5 md:mt-15 flex-col items-center justify-center  md:w-2/5 gap-5 '> 
                <div className='w-full grid gap-2'>
                    <p>Upload Avatar</p>
                    <label
                        htmlFor="profilePic"
                        className={`w-full cursor-pointer border-dashed border-2 ${
                            errors.profilePic ? "border-red-500" : "border-gray-400"
                        } bg-gray-500/20 rounded-lg p-5 grid place-items-center hover:bg-gray-500/30 transition`}
                        >
                        {hasImage ? (
                            <div className="flex flex-col  items-center">
                                <Image
                                    src={URL.createObjectURL(hasImage)}
                                    alt="Uploaded image"
                                    width={100}
                                    height={100}
                                    className="h-20 w-auto rounded-xl"
                                />
                                <div className='flex gap-2 mt-2'> 
                                    <button className='bg-gray-600/30 p-1 rounded-lg cursor-pointer hover:bg-gray-400'  onClick={handleRemoveImage}>Remove Image</button>
                                    <label className='bg-gray-600/30 p-1 rounded-lg cursor-pointer hover:bg-gray-400' > Change Image</label>
                                </div>
                            </div>
                        ) : (
                            <>
                            <Image
                                src="/icon-upload.svg"
                                alt="Upload icon"
                                width={100}
                                height={100}
                                className="h-15 w-auto bg-gray-600/30 p-3 rounded-xl"
                            />
                            <p className="mt-2 text-gray-300">Drag and drop or click to upload</p>
                            </>
                        )}

                        <input
                            id="profilePic"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            {...register("profilePic", { required: true,onChange: (e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                  setUserImage(e.target.files[0]);
                                }} })}
                            className="hidden"
                            
                        />
                    </label>
                    <p className='text-sm text-gray-500'>Upload your photo (JPG or PNG, max size: 500KB)</p>
                </div>
                
                <div className='w-full grid gap-2'>
                    <p>Full Name</p>
                    <input {...register("fullName")} className='border-1 border-gray-400 bg-gray-500/20 rounded-lg p-3 w-full '/>
                </div>
                
                <div className='w-full  grid gap-2'>
                    <p>Email Address</p>
                    <input {...register("email", { required: true })} className='border-1 border-gray-400 bg-gray-500/20 rounded-lg p-3 w-full ' placeholder='example@email.com'/>
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>

                <div className='w-full grid gap-2'>
                    <p>GitHub Username</p>
                    <input {...register("github", { required: true })} className='border-1 border-gray-400 bg-gray-500/20 rounded-lg p-3 w-full ' placeholder='@yourusername'/>
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>

                <button type='submit' className='border-1 border-orange-400 bg-[#f86c4f] text-black font-semibold rounded-lg p-3 w-full cursor-pointer hover:bg-[#d95b45] transition-colors duration-100'>Generate My Ticket</button>
            </form>
        </div>
  )
}
