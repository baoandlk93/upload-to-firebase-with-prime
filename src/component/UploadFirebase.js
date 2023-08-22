import {useState} from "react";
import storage from "../config/firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

function UploadFirebase(props){
    console.log(props);
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const [urlImage,setUrlImage] = useState('');

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    setUrlImage(url);
                });
            }
        );
    };

    return (
        <div>
            <input className="button" type="file" onChange={handleChange} accept="/image/*"/>
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent} "% done"</p>
            <img src={urlImage} alt={urlImage} width={'256px'} height={'128px'}/>
        </div>
    );
}
export default UploadFirebase