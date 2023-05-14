import React from 'react';
import { MdDelete, MdSaveAlt } from 'react-icons/md';
import { toast } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';

import { FcAddImage } from 'react-icons/fc';
import Tooltip from 'react-bootstrap/Tooltip';
import { OverlayTrigger } from 'react-bootstrap';

import Loader from '../components/Loader';
import { useState } from 'react';

import { db, storage } from '../firebase';

import {
  setAddress,
  setImageAsset,
  setUserName,
  setNumber,
  selectAddress,
  selectImageAsset,
  selectMail,
  selectNumber,
  selectUserName,
  setMail,
  selectUser,
} from '../app/CartSlice';
import {
  getDownloadURL,
  uploadBytesResumable,
  ref,
  deleteObject,
} from 'firebase/storage';

const AddProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();

  const name = useSelector(selectUserName);

  const mail = useSelector(selectMail);

  const number = useSelector(selectNumber);

  const address = useSelector(selectAddress);

  const imageAsset = useSelector(selectImageAsset);

  const user = useSelector(selectUser);

  const [isLoading, setIsLoading] = useState(false);
  // console.log(id);

  const renderTooltip = (props) => (
    <Tooltip
      className='text-white bg-black/20 ml-2 px-3 py-1 rounded-lg text-xs'
      id='button-tooltip'
      {...props}
    >
      remove
    </Tooltip>
  );

  const tooltipRender = (props) => (
    <Tooltip
      className='text-white bg-black/20 ml-2 px-3 py-1 rounded-lg text-xs'
      id='button-tooltip'
      {...props}
    >
      Add Profile Picture
    </Tooltip>
  );

  const uploadProfile = (e) => {
    setIsLoading(true);
    if (e.target.files[0]) {
      const imageFile = e.target.files[0];
      const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(uploadProgress);
        },
        (error) => {
          toast.error(`Error while uploading : Try Again...`);
          console.log(error);
          setTimeout(() => {
            setIsLoading(false);
          }, 4000);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            console.log(setImageAsset(downloadURL));

            dispatch(setImageAsset(downloadURL));

            toast.success('Image uploaded successfully...!');
            setIsLoading(false);
          });
        }
      );
    }
  };
  const saveUserDetails = async (e) => {
    // console.log('hiii');

    console.log(user, name, number, address);

    e.preventDefault();
    if (name && mail && number && address && user) {
      console.log(user);
      if (!id) {
        console.log('id irukku');
        try {
          await addDoc(collection(db, 'user'), {
            user: name,
            image: imageAsset,
            email: mail,
            number: number,
            address: address,
            userUid: user?.uid,
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await updateDoc(doc(db, 'user', id), {
            user: name,
            image: imageAsset,
            email: mail,
            number: number,
            address: address,
            userUid: user,
          });
          toast.success('Profile Updated Successfully');
        } catch (error) {
          console.log(error);
        }
      }
      navigate('/profile');
    } else {
      toast.error('All fields are mandatory to fill');
    }
  };

  // delete image
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
    });
  };

  return (
    <div className='bg-slate-800 w-full h-full flex flex-col min-h-screen justify-center items-center text-white'>
      <div className='p-6 rounded-lg bg-slate-900/30 w-[750px] xsm:w-[350px] md:w-[370px] lg:w-[600px] xl:w-[750px]'>
        <form onSubmit={saveUserDetails} className='flex flex-col gap-y-8'>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label htmlFor='profile'>
                    <OverlayTrigger
                      placement='right'
                      delay={{ show: 200, hide: 100 }}
                      overlay={tooltipRender}
                    >
                      <div className='w-[100px] h-[100px] mx-auto bg-black/60 rounded-full flex items-center justify-center -mt-20 cursor-pointer'>
                        <FcAddImage className='w-[45px] h-[45px]  ' />
                      </div>
                    </OverlayTrigger>
                    <input
                      type='file'
                      id='profile'
                      onChange={uploadProfile}
                      accept='image/*'
                      className='hidden'
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className='w-[100px] h-[100px] mx-auto bg-black/60 rounded-full flex items-center justify-center -mt-20 relative'>
                    <img
                      src={imageAsset}
                      alt='profile-pic'
                      className='w-[100px] h-[100px] rounded-full'
                    />
                    <OverlayTrigger
                      placement='right'
                      delay={{ show: 200, hide: 100 }}
                      overlay={renderTooltip}
                    >
                      <button
                        type='button'
                        className='absolute bottom-1 right-1 p-1 rounded-full bg-black/70 text-xl cursor-pointer outline-none hover:shadow-md hover:bg-red-600 duration-500 transition-all ease-in-out'
                        onClick={deleteImage}
                      >
                        <MdDelete className='text-white' />
                      </button>
                    </OverlayTrigger>
                  </div>
                </>
              )}
            </>
          )}

          <input
            type='text'
            placeholder='User Name'
            value={name}
            onChange={(e) => dispatch(setUserName(e.target.value))}
            className='py-3 capitalize rounded pl-3 bg-slate-700'
            required
          />
          <input
            type='email'
            placeholder='Email'
            value={mail}
            onChange={(e) => dispatch(setMail(e.target.value))}
            className='py-3 rounded pl-3 bg-slate-700'
            required
          />
          <input
            type='number'
            placeholder='Mobile Number'
            value={number}
            onChange={(e) => dispatch(setNumber(e.target.value))}
            className='py-3 rounded pl-3 bg-slate-700'
          />
          <textarea
            type='text'
            placeholder='Address'
            value={address}
            rows={3}
            onChange={(e) => dispatch(setAddress(e.target.value))}
            className='py-3 rounded pl-3 bg-slate-700'
          />
          <div>
            <button
              type='submit'
              className='bg-blue-700 py-2 px-3 rounded-lg font-medium inline-flex gap-x-2 items-center'
            >
              Save <MdSaveAlt />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProfile;
