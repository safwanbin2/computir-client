import { useContext, useState } from "react";
import { FaCamera } from "react-icons/fa";
import unknown from "../../assets/unknown.jpg";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import config from "../../config";

const UploadImage = () => {
  const { user, userDB, refetchUserDB, setRefetchUserDB } =
    useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setloading(true);
      const formdata = new FormData();
      formdata.append("image", file);

      fetch(`${config?.base_url}/users/upload-image?email=${user?.email}`, {
        method: "PATCH",
        body: formdata,
      })
        .then((res) => res.json())
        .then((data) => {
          setRefetchUserDB(!refetchUserDB);
          if (!data?.success) {
            return setloading(false);
          }
          setSelectedImage(data.data.photo);

          setloading(false);
        })
        .catch((err) => {
          setloading(false);
        });
    }
  };

  return (
    <>
      <div className="relative size-14 overflow-hidden">
        {loading ? (
          <img src={unknown} alt="" className="rounded-full w-full h-full" />
        ) : selectedImage ? (
          <img
            src={selectedImage}
            alt=""
            className="rounded-full w-full h-full"
          />
        ) : (
          <img
            src={
              selectedImage
                ? selectedImage
                : userDB?.photo
                ? userDB?.photo
                : user?.photoURL
                ? user?.photoURL
                : unknown
            }
            alt=""
            className="rounded-full w-full h-full"
          />
        )}
        <label
          htmlFor="fileInput"
          className="inline-block p-2 rounded-full bg-secondary hover:bg-primary transition-all duration-300 cursor-pointer absolute bottom-0 right-0 w-full h-full"
        >
          <input
            id="fileInput"
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </>
  );
};

export default UploadImage;
