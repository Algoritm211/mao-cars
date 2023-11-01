import React, {useEffect, useRef, useState} from 'react';
import {useForm} from "react-hook-form";

interface ProfileInputs {
  profilePhotos: FileList;
  profileBio: string;
}

export const AccountProfileInfo = () => {
  const [isOpenEditProfileModal, setIsOpenEditProfileModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    watch
  } = useForm<ProfileInputs>();

  const profilePhotos = watch('profilePhotos')

  const onToggleEditProfileModal = () => {
    setIsOpenEditProfileModal(val => !val)
  }

  useEffect(() => {
    if (dialogRef.current?.open && !isOpenEditProfileModal) {
      dialogRef.current?.close()
    } else if (!dialogRef.current?.open && isOpenEditProfileModal) {
      dialogRef.current?.showModal()
    }
  }, [isOpenEditProfileModal])

  const onSubmitProfileEdit = (data: ProfileInputs) => {
    console.log('Updated user`s profile', data)
    onToggleEditProfileModal();
    reset()
  }

  return (
    <React.Fragment>
      <div
        className='flex flex-col justify-center items-center
      flex-wrap mt-6 md:mt-0 md:flex-row
      md:justify-start md:items-start gap-4'>
        <div className="avatar">
          <div className="w-40 rounded-full">
            <img src="/user/mock-user-photo.jpeg" alt='Photo of the user'/>
          </div>
        </div>
        <div className='flex-grow text-center md:mt-6 md:text-start'>
          <h1 className='text-3xl font-bold'>Alexey_Horbunov</h1>
          <p className='text-gray-500 py-2'>Joined 10/29/2023</p>
        </div>
        <button
          className='btn justify-self-end md:mt-6 md:mr-2'
          onClick={onToggleEditProfileModal}
        >Edit profile
        </button>
      </div>

      <dialog ref={dialogRef} className='modal'>
        <div className="modal-box">
          <form method='dialog' onSubmit={onToggleEditProfileModal}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl">Edit Profile</h3>
          <div className="avatar flex justify-center">
            <div className="w-36 rounded-full">
              <img src={profilePhotos?.[0]
                ? URL.createObjectURL(profilePhotos?.[0] as unknown as File)
                : "/user/mock-user-photo.jpeg"} alt='user-photo' />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmitProfileEdit)}>
            <div className="form-control w-full mb-4">
              <label className="label" htmlFor='file-input-profile'>
                <span className='font-bold'>Pick a photo</span>
              </label>
              <input
                {...register('profilePhotos')}
                id='file-input-profile'
                type="file"
                accept="image/png, image/jpeg"
                className="file-input file-input-bordered w-full"/>
            </div>
            <div className='form-control'>
              <label className="label" htmlFor='profile-description'>
                <span className='font-bold'>Bio</span>
              </label>
              <textarea
                {...register('profileBio')}
                id='profile-description'
                placeholder="Bio"
                className="textarea textarea-bordered textarea-md w-full"></textarea>
              <div className='modal-action'>
                <button className='btn btn-primary'>Save</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </React.Fragment>
  );
};
