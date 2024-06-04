
import { Switch } from '@headlessui/react'
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const BannerAdvertiseRow = ({advertisement}) => {
  const axiosSecure = useAxiosSecure()
  const [enabled, setEnabled] = useState('')
  useEffect(() => {
    setEnabled(advertisement.status === 'In Slide');
  }, [advertisement.status]);

  // console.log(enabled);
  const {mutateAsync} = useMutation({
    mutationFn:async(status)=>{
      const {data} = await axiosSecure.patch(`/advertisement/slide/${advertisement._id}`,{status})
      console.log(data);
      return data
    },
    onSuccess:()=>{
      console.log(data);
      toast.success("Banner added Successfully")
    }
  })

  const handleToggle =async (value)=>{
    // console.log(value);
      setEnabled(value)
      const status = value? 'In Slide' : 'Not In Slide'
     try{
        const {data} = await mutateAsync(status)
        
     }
     catch(err){
      console.log(err);
     }

  }

 

  return (
    <>
      {/* row 1 */}
      <tr>
        <td>
          <img
            src={advertisement?.image}
            alt="advertisement image"
            style={{ width: "50px" }}
          />
        </td>
        <td>{advertisement?.name}</td>
        <td>{advertisement?.description}</td>
        <td>{advertisement.seller?.email}</td>
        <td>
        <Switch
      checked={enabled}
      onChange={handleToggle}
      className="shadow-md group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 data-[checked]:bg-blue-600 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
        </td>
      </tr>
    </>
  );
};

export default BannerAdvertiseRow;
