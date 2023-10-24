
import { FileUploader } from "react-drag-drop-files";
import  { useEffect, useState } from "react";
import { imageDB } from '../config/fire';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";



const fileTypes = ["JPEG", "PNG", "GIF","PDF","DOCX","MP3","MP4","SVG","JPG"];

export default function App() {
 //func upload firebase
 const [img,setImg] =useState('')
 const [imgUrl,setImgUrl] =useState([])

 const handleClick = () =>{
  if(img !==null){
     const imgRef =  ref(imageDB,`files/${v4()}`)
     uploadBytes(imgRef,img).then(value=>{
         console.log(value)
         alert('berhasil upload')
         getDownloadURL(value.ref).then(url=>{
             setImgUrl(data=>[...data,url])
         })
     })
  }
 }

 useEffect(()=>{
     listAll(ref(imageDB,"files")).then(imgs=>{
         console.log(imgs)
         imgs.items.forEach(val=>{
             getDownloadURL(val).then(url=>{
                 setImgUrl(data=>[...data,url])
             })
         })
     })
 },[])


 const [file, setFile] = useState(null);
 const handleChange = (file) => {
   setFile(file);
 };

 //func lama



  //  const handleUpload = async () => {
  //   if (file) {
  //     console.log("Uploading file...");

  //     const formData = new FormData();
  //     formData.append("file", file);

  //     try {
  //       // You can write the URL of your server or any other endpoint used for file upload
  //       const result = await fetch("../assets", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       const data = await result.json();

  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };
  return (
    <div className="App">
    
      <FileUploader
       onChange={(e)=>setImg(e.target.files[0])}
        multiple={true}
        handleChange={handleChange}
        name="file"
         types={fileTypes}
      />
      <br />
      <p>{file ? `File name: ${file[0].name}` : "No file selected"}</p>
      {file && <button style={{borderRadius:"5px", backgroundColor:"#205fff",color:"white"}} onClick={handleClick}>Upload a file</button>}
      {
                    imgUrl.map(dataVal=>{<div>
                        <img src={dataVal} height="200px" width="200px" />
                        <br/> 
                    </div>})
                }

    </div>
  );
}