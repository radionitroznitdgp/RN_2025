import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Team.css";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

// Faculty images
import santanu from "/assets/images/faculty/santanu.jpg";
import soumya from "/assets/images/faculty/soumya.jpg";

// 4th Year images
import aman from "/assets/images/4th_yr/aman.jpg";
import animesh from "/assets/images/4th_yr/animesh.JPG";
import anth from "/assets/images/4th_yr/anth.jpg";
import anurag from "/assets/images/4th_yr/anurag.jpg";
import bashu from "/assets/images/4th_yr/bashu.jpg";
import bhav from "/assets/images/4th_yr/bhav.jpg";
import darshit from "/assets/images/4th_yr/darshit.jpeg";
import debasmitaSaha from "/assets/images/4th_yr/DebasmitaSaha.jpg";
import gopeshwar from "/assets/images/4th_yr/Gopeshwar.jpg";
import mmk from "/assets/images/4th_yr/mmk.jpg";
import pulkit from "/assets/images/4th_yr/pulkit.jpeg";
import sayantan from "/assets/images/4th_yr/sayantan.jpg";
import shaswata from "/assets/images/4th_yr/Shaswata.jpg";
import soni from "/assets/images/4th_yr/soni.jpg";
import suraj from "/assets/images/4th_yr/suraj.JPG";
import swastik from "/assets/images/4th_yr/swastik.jpg";
import thanu from "/assets/images/4th_yr/thanu.jpg";
import vishu from "/assets/images/4th_yr/vishu.jpg";
import aditya from "/assets/images/4th_yr/aditya.jpg"
import debjyoti from "/assets/images/4th_yr/debjyoti.jpg"
import shruti from "/assets/images/4th_yr/shruti.jpg"
import soumyadeep from "/assets/images/4th_yr/soumyadeep.jpg"
import srijan from "/assets/images/4th_yr/srijan.jpg"

// 3rd yr wale
import shivamKumar from "/assets/images/3rd_yr/shivam.jpg";
import pratik from "/assets/images/3rd_yr/Pratik.jpg";

import raniPrasanna from "/assets/images/3rd_yr/Rani.jpg";
import philimon from "/assets/images/3rd_yr/Philimon_.jpg";
import suhani from "/assets/images/3rd_yr/Suhani.jpg";
import pravat from "/assets/images/3rd_yr/Pravat.JPG";
import tolaram from "/assets/images/3rd_yr/Tolaram_.jpg";

import arijit from "/assets/images/3rd_yr/ar1.jpg";
import jayant from "/assets/images/3rd_yr/jay.jpg";
import Akhil from "/assets/images/3rd_yr/Akhil.jpg";
import murthy from "/assets/images/3rd_yr/murthy.jpg";
import Saipriya from "/assets/images/3rd_yr/Saipriya .jpg";
import Chandra from "/assets/images/3rd_yr/Chandramouli.jpg";
import abir from "/assets/images/3rd_yr/abir.jpeg";


//2nd year (examples)
import sharad from "/assets/images/2nd_yr/sharad.jpeg";
import keshav from "/assets/images/2nd_yr/keshav.jpeg";
import swatchata from "/assets/images/2nd_yr/swatchatha.jpeg";
import trisha from "/assets/images/2nd_yr/trisha.jpeg";
import kuldeep from "/assets/images/2nd_yr/kuldeep.jpeg";
import tarak from "/assets/images/2nd_yr/tarak.jpeg";
import mohitha from "/assets/images/2nd_yr/nandini.jpeg";
import hasini from "/assets/images/2nd_yr/hasini.jpeg";
import dinesh from "/assets/images/2nd_yr/dinesh.jpeg";
import rudra from "/assets/images/2nd_yr/rudra.jpeg";


const members = {
  faculty: [
    {
      name: "Mr. Santanu Paul",
      photo: santanu,
      post: "Faculty Advisor",
      instagram: "#",
      linkedin: "#",
      phone: "+917866878248",
      email: "spaul.ee@nitdgp.ac.in",
    },
     {
      name: "Mr. Soumya Chatterjee",
      photo: soumya,
      post: "Faculty Advisor",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/soumya-chatterjee-716706237",
      phone: "+919051016652",
      email: " schatterjee.ee@nitdgp.ac.in",
    },
  ],
  fourthYear: [
     {
      name: "Basudev Pal",
      photo: bashu,
      post: "President",
      instagram: "https://www.instagram.com/mr._.basudev._.07?igsh=eTMxN29jbmw2eWty",
      linkedin: "https://www.linkedin.com/in/basudev-pal-b249002b7",
      phone: "+917750907396",
      email: "bp.23ee8081@nitdgp.ac.in",
    },
    {
      name: "Sayantan Banerjee",
      photo: sayantan,
      post: "General Secretary",
      instagram: "https://www.instagram.com/sayantanb_007?igsh=cnp3eHZxbWIzanIx",
      linkedin: "https://www.linkedin.com/in/sayantan-banerjee-193b0124a",
      phone: "+918240679056",
      email: "sayantanbanerjee2022@gmail.com",
    },
    {
      name: "Darshit Rawal",
      photo: darshit,
      post: "Vice President",
      instagram: "https://www.instagram.com/itsme_amanshaw/",
      linkedin: "#",
      phone: "+917976998315",
      email: "darshitrawal27@gmail.com",
    },
    {
      name: "Debasmita Saha",
      photo: debasmitaSaha,
      post: "Joint Secretary",
      instagram: "https://www.instagram.com/twinkling._star.?igsh=Zzdua2J4Z2Q0cmZt",
      linkedin: "https://www.linkedin.com/in/debasmita-saha-005405308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919748036639",
      email: "ds.23bt8067@nitdgp.ac.in",
    },
    {
      name: "Rishab Soni",
      photo: soni,
      post: "Treasurer",
      instagram: "https://www.instagram.com/rishabhsoni_09/profilecard/?igsh=MTBmYTNjZnhyd3ozbA==",
      linkedin: "https://www.linkedin.com/in/rishabh-soni-9b533a250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+916388660810",
      email: "rishabhsoni1803@gmail.com",
    },
   {
      name: "MMK Lechler",
      photo: mmk,
      post: "Convenor",
      instagram: "https://www.instagram.com/flora_lechler?igsh=MXVpZDU3cDl1enFuMQ==",
      linkedin: "https://www.linkedin.com/in/mozes-mani-kumari-919728339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919381072245",
      email: "floramosses123@gmail.com",
    },
    {
      name: "Srijan Maddheshiya",
      photo: srijan,
      post: "Co Convenor",
      instagram: "https://www.instagram.com/srijan_maddeshiya/",
      linkedin: "https://www.linkedin.com/in/srijan-maddheshiya-5b7574298/",
      phone: "+919616172542",
      email: "sm.23me8142@nitdgp.ac.in",
    },
     {
      name: "Debjyoti Shil",
      photo: debjyoti,
      post: "Tech Head",
      instagram: "https://www.instagram.com/debjyotishil10?igsh=MTdkNW5leThrejR2bg==",
      linkedin: "#",
      phone: "+917980524650",
      email: "debjyotishil03@gmail.com",
    },
      {
      name: "Swastik Roy",
      photo: swastik,
      post: "Editor In Cheif",
      instagram: "https://www.instagram.com/_sw_as_ti_k/",
      linkedin: "http://www.linkedin.com/in/swastikroy-work",
      phone: "+918101858284",
      email: "royswastik047@gmail.com",
    },
     {
      name: "Suraj Kumar",
      photo: suraj,
      post: "Event Head",
      instagram: "https://www.instagram.com/samir_arya_1326?igsh=MTQyYXVoYjcyamZndw==",
      linkedin: "#",
      phone: "+918102152665",
      email: "sk.23ce8050@nitdgp.ac.in",
    },
    {
      name: "Vishu J",
      photo: vishu,
      post: "Publicity Head",
      instagram: "https://www.instagram.com/vishu_judiyan?igsh=dHYwYjV1bjE1OW9v",
      linkedin: "#",
      phone: "+917017787510",
      email: "vishujudiyan2005@gmail.com",
    },
     {
      name: "Pulkit Sepat",
      photo: pulkit,
      post: "Fest Head",
      instagram: "https://www.instagram.com/invites/contact/?igsh=4ax7dddrgakh&utm_content=rui27b8",
      linkedin: "https://www.linkedin.com/in/pulkit-sepat-a3882a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+918000487872",
      email: "ps.23ch8047@nitdgp.ac.8n",
    },
    {
      name: "Aman Shaw",
      photo: aman,
      post: "Sponsorship Head",
      instagram: "https://www.instagram.com/itsme_amanshaw/",
      linkedin: "#",
      phone: "+917980271149",
      email: "ayushaman709@gmail.com",
    },
    {
      name: "Anurag Ray",
      photo: anurag,
      post: "Content Head",
      instagram: "https://www.instagram.com/anurag_kingoftimes?igsh=MTdjdXhkcTE0aWVnMw==",
      linkedin: "https://www.linkedin.com/in/anurag-ray-90b613309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919836530276",
      email: "anurag.ray2005@gmail.com",
    },
    {
      name: "Srirama Sai Bhavana",
      photo: bhav,
      post: "Logistics Head",
      instagram: "https://www.instagram.com/chinni_2213_/profilecard/?igsh=MXgyaXZkazBxc2liYg==",
      linkedin: "https://www.linkedin.com/in/srirama-saibhavana-9b42ab30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919381770556",
      email: "ss.23cs8153@nitdgp.ac.in",
    },
     {
      name: "Gopeshwar Kumar",
      photo: gopeshwar,
      post: "Operations Head",
      instagram: "https://www.instagram.com/unique_gopeshwar_/",
      linkedin: "https://www.linkedin.com/in/gopeshwar-k-954a48265/",
      phone: "+916205731951",
      email: "gopeshwarkumark@gmail.com",
    },
    {
      name: "Aditya Shaw",
      photo: aditya,
      post: "PR & Outreach Head",
      instagram: "https://www.instagram.com/_a_d_i_t_y_a__s_h_a_w_/?hl=en",
      linkedin: "https://www.linkedin.com/in/aditya-shaw-b5a3a430a/",
      phone: "+918961414207",
      email: "as.23mm8036@nitdgp.ac.in",
    },
    {
      name: "Soumyadeep Dey",
      photo: soumyadeep,
      post: "ATH Head",
      instagram: "https://www.instagram.com/off_soumyadeep.dey/",
      linkedin: "https://www.linkedin.com/in/soumyadeepd1/",
      phone: "+919531784836",
      email: "sd.23me8009@nitdgp.ac.in",
    },
    {
      name: "Antharya J",
      photo: anth,
      post: "Web D Head",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/antharya-j-98a140309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+917013408920",
      email: "antharyajalligampala@gmail.com",
    },
    {
      name: "Animesh",
      photo: animesh,
      post: "Corporate & Communication Head",
      instagram: "https://www.instagram.com/madhumitaanimesh_nit_durgapur/",
      linkedin: "https://www.linkedin.com/in/animesh-satyapragyan-patra-0a6218242/",
      phone: "+919337269060",
      email: "animeshsatyapragyanpatra@gmail.com",
    },
    {
      name: "Sashwata Ghosh",
      photo: shaswata,
      post: "Senior Coordinators",
      instagram: "https://www.instagram.com/the_god_particle_01?igsh=bWFheGZid2xrN2lu",
      linkedin: "https://www.linkedin.com/in/shaswata-ghosh-nit-d?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+917603065660",
      email: "shaswatanitdgpofficial@gmail.com",
    },
    {
      name: "Shrutisadhan Mudly",
      photo: shruti,
      post: "Senior Coordinators",
      instagram: "https://www.instagram.com/mudly_ss/",
      linkedin: "https://www.linkedin.com/in/shrutisadhan-mudly-ab4b342a4/",
      phone: "+918240064024",
      email: "sm.23ee8040@nitdgp.ac.in",
    },
  ],
  thirdYear:[
    {
      name: "Shivam kumar",
      photo: shivamKumar,
      domain: "Web Development",
      instagram: "https://www.instagram.com/shivam.nitd?igsh=dWV1c2M0MGF0cjNp",
      linkedin:
        "https://www.linkedin.com/in/shivamkumarnit?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919153628776",
      email: "sk.24u10554@nitdgp.ac.in",
    },
    {
      name: "Pratik Khuntia",
      photo: pratik,
      domain: "Web Development & Content Writing",
      instagram:
        "https://www.instagram.com/pratik_aka_pk/profilecard/?igsh=MWI1Z24yejdwZGNvag==",
      linkedin:
        "https://www.linkedin.com/in/pratik-khuntia-02aa031b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+918144171159",
      email: "pkonel1234@gmail.com",
    },
   
    {
      name: "Rani Prasanna",
      photo: raniPrasanna,
      domain: "Web Development",
      instagram:
        "https://www.instagram.com/prasanna30_04?igsh=MWxkY3lweDliMW1mOQ==",
      linkedin:
        "https://www.linkedin.com/in/g-rani-prasanna-14a72a324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919392372226",
      email: "raniprasanna997@gmail.com",
    },
    {
      name: "Philimon Hembram",
      photo: philimon,
      domain: "Graphic Design",
      instagram:
        "https://www.instagram.com/philimon.hembram?igsh=cGJmNmwzN2t6MzB3",
      linkedin:
        "https://www.linkedin.com/in/philimon-hembram-a77825366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+917501287417",
      email: "philimonhembram82@gmail.com",
    },
    {
      name: "Akhil",
      photo: Akhil,
      domain: "Graphic Design",
      instagram:
        "https://www.instagram.com/akhil_333_?igsh=MTFybG1hNzZtcnBwbA==",
      linkedin:
        "https://www.linkedin.com/in/akhil-kintali-a7849135b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919390230633",
      email: "akhilkintali23@gmail.com",
    },
    {
      name:" K Murthy",
      photo:murthy,
      domain:"Video Editing",
      instagram:"https://www.instagram.com/murthy_7.0?igsh=MWk2dDJvNGwwbWt1eQ==",
      linkedin:"https://www.linkedin.com/in/d-s-v-v-sn-murthy-kummarapurugu-782516331?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      phone:"+916301018012",
      email:"satya18199@gmail.com",
    },
     {
      name: "Abir Das",
      photo: abir,
      domain: "Event Management, Graphics Design",
      instagram:
        "https://www.instagram.com/_abir_._das?vrfl=NWtlZGpkc3p6cW45",
      linkedin:
        "https://www.linkedin.com/in/abir-das-b40856325?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      phone: "+917319428779",
      email: "abir2004das@gmail.com",
    },
  
    {
      name: "Suhani Vishwakarma",
      photo: suhani,
      domain: "Web Development & Public Speaking",
      instagram:
        "https://www.instagram.com/suhani_vishwakarma?igsh=MW45ZGV4cW5oMHFuOQ==",
      linkedin:
        "https://www.linkedin.com/in/suhani-vishwakarma-aabb62358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919696692324",
      email: "suhanivishwakarma185@gmail.com",
    },
    {
      name: "Pravat Ranjan Naik",
      photo: pravat,
      domain: "Event Management",
      instagram:
        "https://www.instagram.com/_.pravat_?igsh=ZjU2bDRoNmdwZnRn&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/pravat-ranjan-naik-57bab5273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      phone: "+918670682455",
      email: "pravatrn12@gmail.com",
    },
    {
      name: "Tolaram Kewatiya",
      photo: tolaram,
      domain: "Event Management & Graphic Design",
      instagram:
        "https://www.instagram.com/i_m_trk44?igsh=MTd3NDVrcmRvaXR1bA==&utm_source=ig_contact_invite",
      linkedin:
        "https://www.linkedin.com/in/tolaram-kewatiya-878501359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919257191742",
      email: "tolaramkewatiya@gmail.com",
    },
   
    {
      name: "Arijit Bag",
      photo: arijit,
      domain: "Content Writing",
      instagram: "https://www.instagram.com/er.nitd28?igsh=eGc0cWlpY3B5bmMz",
      linkedin:
        "https://www.linkedin.com/in/arijit-bag-0a29b8323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+918840754828",
      email: "ab. 24u10007@nitdgp.ac.in",
    },
    {
      name: "Chandra mouli",
      photo: Chandra,
      domain: "Graphic Design",
      instagram:
        "https://www.instagram.com/_chandramouli__06?igsh=MXZtOWRjYnRtbWswdg==",
      linkedin:
        "https://www.linkedin.com/in/chandra-mouli-9ba938359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919032141637",
      email: "bchandramouli18@gmail.com",
    },
    {
      name: "Saipriya",
      photo: Saipriya,
      domain: "Content writing",
      instagram:
        "https://www.instagram.com/sai_priya196?igsh=MTdzZzRiMHd2dW44OQ==",
      linkedin: "",
      phone: "+919542489239",
      email: "saipriyakemburu53@gmail.com",
    },
    {
      name: "Jayant Rachhoya",
      photo: jayant,
      domain: "Video Editing",
      instagram:
        "https://www.instagram.com/jayantfootballer?igsh=MTB5bWZqY2l1bGI4aw==",
      linkedin:
        "https://www.linkedin.com/in/jayant-rachhoya-4013a52a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+918387817610",
      email: "jayantrachhoya@gmail.com",
    },
   
  ],
  secondYear: [
    {
      name:"Sharad Reddy",
      photo: sharad,
      domain: "Graphic Design",
      instagram:"https://www.instagram.com/sharad_reddy_4515?igsh=NnRqcmQwcTJncGlt",
      linkedin:"#",
      phone:"+917013791514",
      email:"sharadreddym@gmail.com",
    },
    {
      name: "Keshav Jangir",
      photo: keshav,
      domain: "Video Editing",
      instagram:"#",
      linkedin:"#",
      phone:"+919982377257",
      email: "#",
    },
    {
      name: "Pediredla Swatchata",
      photo: swatchata,
      domain:"Graphic Design",
      instagram:"https://www.instagram.com/swatchata_171?igsh=MWs1dDk1bjJldzhkdg==",
      linkedin:"#",
      phone:"+917013950504",
      email: "pediredlaswatchata171@gmail.com",
    },
    {
      name: "Trisha",
      photo: trisha,
       domain: "Video Editing",
      instagram:"https://www.instagram.com/_3sha_00?utm_source=qr&igsh=MWd1OTN4ZTg4M29vcg==",
      linkedin:"#",
      phone:"+918919296806",
      email: "trishasitagondiathram@gmail.com",
    },
    {
      name:"Kuldeep Kumawat",
      photo: kuldeep,
       domain: "Video Editing",
      instagram:"#",
      linkedin:"#",
      phone:"+919636410928",
      email: "#",
    },
    { 
       name: "Tarak Swamy",
      photo: tarak,
      domain:"Graphic Design",
      instagram:"https://www.instagram.com/_tarak_swamy_jigireddi_?utm_source=qr&igsh=MTlxNzJhNjIyamN5Ng%3D%3D",
      linkedin:"https://www.linkedin.com/in/tarak-jigireddy-8875ba414?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      phone:"+919866734442",
      email: "tarakjigireddy05@gmail.com",
    },
    {
      name: "Mohitha Nandini",
      photo: mohitha,
      domain: "Web Development",
      instagram: "https://www.instagram.com/mohithanandini?igsh=MXIxbXhuOGp6NmV1aQ==",
      linkedin:"https://www.linkedin.com/in/mohitha-nandini-vangapandu-3837333a8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      phone:"+919704009385",
      email:"mohitanandini@gmail.com",
  },
  {
    name:"Majji Gnana Hasini",
    photo: hasini,
    domain: "Web Devlopment and Content Writing",
    instagram:"https://www.instagram.com/__hasiniii_08?igsh=MWtxeDZ1MHNsMGhlYw==",
    linkedin:"https://www.linkedin.com/in/gnana-hasini-majji-a114a137b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    phone:"+917569590040",
    email:"majjignanahasini@gmail.com",
  },
  {
    name: "Dinesh Kumar",
    photo: dinesh,
    domain: "Graphic design",
    instagram:"#",
    linkedin:"#",
    phone:"+918297321466",
    email:"#",
  },
  {
    name: "Rudra Sai Laxmi Prasad",
    photo: rudra,
    domain: "Content Writing",
    instagram:"https://www.instagram.com/irslaxmiprasad?igsh=cWE5MGRmcXF0czhx",
    linkedin:"#",
    phone:"+918895344570",
    email:"rudrasailaxmiprasad9920@gmail.com",
  },
],
};

const MemberCard = ({ name, photo, post, domain, instagram, linkedin, phone, email }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="card">
      <div className="card-inner">       
        <div className="card-blur-area">
          <div className="avatar-wrapper">
            <img className="avatar" src={photo} alt={name} />
            <div className="avatar-glow" />
          </div>
          <h3 className="teammember-name">{name}</h3>
          <p className="member-role">{post || domain}</p>
        </div>
       
        <div className="hover-overlay" onClick={e => e.stopPropagation()}>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${email}`} className="contact-link">{email}</a>
            </div>
             <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href className="contact-link">{phone}</a>
            </div>
            <div className="social-links">
              <a href={instagram} className="social-icon" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                <FaInstagram className="icon" />
              </a>
              <a href={linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};


export default function TeamPage() {
  const [selectedTab, setSelectedTab] = React.useState("faculty");

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.className = "particles-canvas";
    document.querySelector('.team-page').appendChild(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle animation
    const particles = [];
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.5 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.fillStyle = `rgba(108, 99, 255, ${this.size / 3})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const renderMembers = (group) => (
    <div className="card-grid">
      {members[group].map((member, index) => (
        <MemberCard
          key={index}
          {...member}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );

  return (
    <div className="team-page">
      <div className="header-glow" />
      <div className="particles-container" />

      <h1 className="title">
        <span className="title-text">Radio Nitroz</span>
        <span className="title-sub">Official Entertainment Club</span>
      </h1>

      <div className="tabs-container">
        <div className="tabs">
          {Object.keys(members).map((group) => (
            <button
              key={group}
              className={`tab-button ${selectedTab === group ? 'active' : ''}`}
              onClick={() => setSelectedTab(group)}
            >
              <span className="tab-text">
                {group === "faculty" && "Faculty Advisor"}
                {group === "fourthYear" && "Office Bearers"}
                {group === "thirdYear" && "Senior Team"}
                {group === "secondYear" && "Junior Team"}
              </span>
              <div className="tab-highlight" />
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">{renderMembers(selectedTab)}</div>
    </div>
  );
}