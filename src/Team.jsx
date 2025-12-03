// src/Team.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Team.css";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

/* ---------------- IMAGE IMPORTS ---------------- */
// Faculty
import santanu from "./assets/images/faculty/santanu.jpg";
import soumya from "./assets/images/faculty/soumya.jpg";

// 4th Year
import jayantmandal from "./assets/images/4th_yr/Jayant.jpg";
import kirthika from "./assets/images/4th_yr/kir.jpg";
import asif from "./assets/images/4th_yr/asif.jpg";
import ramya from "./assets/images/4th_yr/ramya.jpg";
import kartikeya from "./assets/images/4th_yr/kar.jpg";
import pranesh from "./assets/images/4th_yr/pra.jpg";
import rupali from "./assets/images/4th_yr/rupali.jpg";
import arnab from "./assets/images/4th_yr/arnab.jpg";
import anshika from "./assets/images/4th_yr/ansh.jpg";
import sahil from "./assets/images/4th_yr/sai.JPG";
import sarmistha from "./assets/images/4th_yr/sar.jpg";
import raj from "./assets/images/4th_yr/raj.jpg";
import anshul from "./assets/images/4th_yr/anshul.jpeg";
import mmss from "./assets/images/4th_yr/mmss.jpeg";
import shankar from "./assets/images/4th_yr/shankar.jpg";
import touf from "./assets/images/4th_yr/touf.jpg";
import rishita from "./assets/images/4th_yr/rish.jpg";
import deepsika from "./assets/images/4th_yr/deep.jpg";
import sanjib from "./assets/images/4th_yr/sanjib.jpeg";
import harshada from "./assets/images/4th_yr/harsh.jpg";

// 3rd Year
import aman from "./assets/images/3rd_yr/aman.jpg";
import animesh from "./assets/images/3rd_yr/animesh.JPG";
import anth from "./assets/images/3rd_yr/anth.jpg";
import anurag from "./assets/images/3rd_yr/anurag.jpg";
import bashu from "./assets/images/3rd_yr/bashu.jpg";
import bhav from "./assets/images/3rd_yr/bhav.jpg";
import darshit from "./assets/images/3rd_yr/darshit.jpg";
import debasmitaSaha from "./assets/images/3rd_yr/DebasmitaSaha.jpg";
import gopeshwar from "./assets/images/3rd_yr/Gopeshwar.jpg";
import mmk from "./assets/images/3rd_yr/mmk.jpg";
import pulkit from "./assets/images/3rd_yr/pulkit.jpeg";
import sayantan from "./assets/images/3rd_yr/sayantan.jpg";
import shaswata from "./assets/images/3rd_yr/Shaswata.jpg";
import soni from "./assets/images/3rd_yr/soni.jpg";
import suraj from "./assets/images/3rd_yr/suraj.JPG";
import swastik from "./assets/images/3rd_yr/swastik.jpg";
import thanu from "./assets/images/3rd_yr/thanu.jpg";
import vishu from "./assets/images/3rd_yr/vishu.jpg";
import aditya from "./assets/images/3rd_yr/aditya.jpg";
import debjyoti from "./assets/images/3rd_yr/debjyoti.jpg";
import shruti from "./assets/images/3rd_yr/shruti.jpg";
import soumyadeep from "./assets/images/3rd_yr/soumyadeep.jpg";
import srijan from "./assets/images/3rd_yr/srijan.jpg";

// 2nd Year
import shivamKumar from "./assets/images/2nd_year/shivam.jpg";
import pratik from "./assets/images/2nd_year/Pratik.jpg";
import shobhit from "./assets/images/2nd_year/Shobhit_.jpg";
import raniPrasanna from "./assets/images/2nd_year/Rani.jpg";
import philimon from "./assets/images/2nd_year/Philimon_.jpg";
import suhani from "./assets/images/2nd_year/Suhani.jpg";
import pravat from "./assets/images/2nd_year/Pravat.JPG";
import tolaram from "./assets/images/2nd_year/Tolaram_.jpg";
import pallavi from "./assets/images/2nd_year/Pallavi Kumari_.jpg";
import arijit from "./assets/images/2nd_year/ar1.jpg";
import jayant from "./assets/images/2nd_year/jay.jpg";
import Akhil from "./assets/images/2nd_year/Akhil.jpg";
import Saipriya from "./assets/images/2nd_year/Saipriya .jpg";
import Chandra from "./assets/images/2nd_year/Chandramouli.jpg";
import Shivansh from "./assets/images/2nd_year/Shivansh.jpg";
import ishita from "./assets/images/2nd_year/ishita.jpg";

/* ---------------- MEMBER DATA ---------------- */
const members = {
  faculty: [
    {
      name: "Mr. Santanu Paul",
      photo: santanu,
      post: "Faculty Advisor",
      instagram: "#",
      linkedin: "#",
      phone: "‪+917866878248‬",
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
      name: "D Sai Sahil",
      photo: sahil,
      post: "President",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/duvvu-sai-sahil-149089262/",
      phone: "+918328078950",
      email: "dss.22u10257@btech.nitdgp.ac.in",
    },
   
    {
      name: "Mohammed Asif",
      photo: asif,
      post: "General Secretary",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/md-asif-22891a264/",
      phone: "+918967290251",
      email: "ma.22u10143@btech.nitdgp.ac.in",
    },
     {
      name: "Sk Raj Ali",
      photo: raj,
      post: "Vice President",
      instagram: "https://www.instagram.com/raj_dgp03?igsh=anJqNzhqdHdxZWVw",
      linkedin: "https://www.linkedin.com/in/sk-raj-/",
      phone: "+919635637725",
      email: "sra.22u10074@btech.nitdgp.ac.in",
    },
    {
      name: "Anshul Kumar Parira",
      photo: anshul,
      post: "Treasurer",
      instagram: "https://www.instagram.com/anshul.parira/profilecard/?igsh=MTE2eDEzbTlzdDE4Yg==",
      linkedin: "https://www.linkedin.com/in/anshul-kumar-parira-684474277/",
      phone: "+917488898308",
      email: "akp.22u10045@btech.nitdgp.ac.in",
    },
    {
      name: "Jayant Mandal",
      photo: jayantmandal,
      post: "Joint Secretary",
      instagram: "https://www.instagram.com/jayantmandal2004?igsh=MXJieHRrOXN0c2Z5dQ== ",
      linkedin: "https://www.linkedin.com/in/jayant-mandal-73a019286/",
      phone: "+919531865131",
      email: "jm.22u10919@btech.nitdgp.ac.in",
    },
    {
      name: "Ramya Akalankam",
      photo: ramya,
      post: "Convenor",
      instagram: "https://www.instagram.com/_ramya.aaa?igsh=MTNhMDRoZTB3Y2Q4NQ== ",
      linkedin: "https://www.linkedin.com/in/ramya-akalankam-9222a126b/",
      phone: "+919059167355",
      email: "ar.22u10042@btech.nitdgp.ac.in",
    },
    {
      name: "Rupali Kumari",
      photo: rupali,
      post: "Co Convenor",
      instagram: "https://www.instagram.com/rupalikumari20.09?igsh=MXBzanRvZDZ6aGJ0dA== ",
      linkedin: "https://www.linkedin.com/in/rupali-kumari-13a782269/",
      phone: "+919153265972",
      email: "rk.22u10549@btech.nitdgp.ac.in",
    },
    {
      name: "Kartikeya",
      photo: kartikeya,
      post: "Editor-In-Chief",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/karthikeya-koyya-45768a26a/",
      phone: "+918977025556",
      email: "kk.22u10186@btech.nitdgp.ac.in",
    },
    
    {
      name: "Md Toufeeque khan",
      photo: touf,
      post: "Tech Head",
      instagram: "https://www.instagram.com/toufeequekhanmohammad?igsh=cWlrZnlsNWs4eHkx ",
      linkedin: "#",
      phone: "+917842405876",
      email: "akp.22u10045@btech.nitdgp.ac.in",
    },
    {
      name: "Kirthika S",
      photo: kirthika,
      post: "Event Head",
      instagram: "https://www.instagram.com/s.k.i.r.t.h.i.k.a?igsh=M3dmZWRzODdybDZp ",
      linkedin: "#",
      phone: "+919476057610",
      email: "sk.22u10918@btech.nitdgp.ac.in",
    },
    {
      name: "Deepsika Bishoye",
      photo: deepsika,
      post: "Publicity Head",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/deepsika-bishoye-946737284/",
      phone: "+918919718045",
      email: "db.22u10739@btech.nitdgp.ac.in",
    },
    {
      name: "Anshika Goswami",
      photo: anshika,
      post: "Fest Head",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/anshikaa8/",
      phone: "+918009591725",
      email: "ag.22u10693@btech.nitdgp.ac.in",
    },
    {
      name: "Arnab Banerjee",
      photo: arnab,
      post: "Sponsorship Head",
      instagram: "https://www.instagram.com/0ceanit?igsh=azNnbGIxZG9xZHBl ",
      linkedin: "https://www.linkedin.com/in/arnab-banerjee-47546019a/",
      phone: "+919064592539",
      email: "ab.22u10749@btech.nitdgp.ac.in",
      
    },
    {
      name: "Sanjib Maity",
      photo: sanjib,
      post: "Logistics Head",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/sanjib-speaks/",
      phone: "+919883297925",
      email: "sm.22u10065@btech.nitdgp.ac.in",
    },
    {
      name: "K Pranesh Rao",
      photo: pranesh,
      post: "Operations Head",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/k-pranesh-rao-3b0b75292/",
      phone: "+919679598518",
      email: "kpr.22u10915@btech.nitdgp.ac.in",
    },
    {
      name: "MMSS Manikanta",
      photo: mmss,
      post: "PR & Outreach Head",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/mohanmeesala05//",
      phone: "+919505098186",
      email: "mmssm.22u10438@btech.nitdgp.ac.in",
    },
    {
      name: "Kumar Shankar",
      photo: shankar,
      post: "ATH Head",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/kumar-sankar-reddy-5a9523261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+916301101659",
      email: "crksr.22u10034@btech.nitdgp.ac.in",
    },
    {
      name: "Sivala Rishita",
      photo: rishita,
      post: "WebD Head",
      instagram: "https://www.instagram.com/rishitaaahh_?igsh=MXFtczVvenB1c2c4bA== ",
      linkedin: "https://www.linkedin.com/in/rishita-sivala-459bbb261/",
      phone: "+919063462911",
      email: "sr.22u10422@btech.nitdgp.ac.in",
    },{
      name: "Harshada Pawar",
      photo: harshada,
      post: "Ideation Head",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/harshada-pawar-449b80374/",
      phone: "+919356704880",
      email: "phv.22u10357@btech.nitdgp.ac.in",
    },
    {
      name: "Sarmistha Naskar",
      photo: sarmistha,
      post: "corporate communication head",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/sarmistha-naskar-004a38269/",
      phone: "+916289762949",
      email: "sn.22u10023@btech.nitdgp.ac.in",
    },
    
  ],
  thirdYear: [
    {
      name: "Rishab Soni",
      photo: soni,
      domain: "Creative Head",
      instagram: "https://www.instagram.com/rishabhsoni_09/profilecard/?igsh=MTBmYTNjZnhyd3ozbA==",
      linkedin: "https://www.linkedin.com/in/rishabh-soni-9b533a250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+916388660810",
      email: "rishabhsoni1803@gmail.com",
    },
    {
      name: "Sayantan Banerjee",
      photo: sayantan,
      domain: "Deputy Treasurer",
      instagram: "https://www.instagram.com/sayantanb_007?igsh=cnp3eHZxbWIzanIx",
      linkedin: "https://www.linkedin.com/in/sayantan-banerjee-193b0124a",
      phone: "+918240679056",
      email: "sayantanbanerjee2022@gmail.com",
    },
    {
      name: "Debasmita Saha",
      photo: debasmitaSaha,
      domain: "Content Head",
      instagram: "https://www.instagram.com/twinkling._star.?igsh=Zzdua2J4Z2Q0cmZt",
      linkedin: "https://www.linkedin.com/in/debasmita-saha-005405308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919748036639",
      email: "ds.23bt8067@nitdgp.ac.in",
    },
    {
      name: "Basudev Pal",
      photo: bashu,
      domain: "Media Head",
      instagram: "https://www.instagram.com/mr..basudev..07?igsh=eTMxN29jbmw2eWty",
      linkedin: "https://www.linkedin.com/in/basudev-pal-b249002b7",
      phone: "+917750907396",
      email: "bp.23ee8081@nitdgp.ac.in",
    },
    {
      name: "Anurag Ray",
      photo: anurag,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/anurag_kingoftimes?igsh=MTdjdXhkcTE0aWVnMw==",
      linkedin: "https://www.linkedin.com/in/anurag-ray-90b613309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919836530276",
      email: "anurag.ray2005@gmail.com",
    },
    {
      name: "Antharya J",
      photo: anth,
      domain: "Senior Coordinator",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/antharya-j-98a140309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+917013408920",
      email: "antharyajalligampala@gmail.com",
    },
    {
      name: "Swastik Roy",
      photo: swastik,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/_sw_as_ti_k/",
      linkedin: "http://www.linkedin.com/in/swastikroy-work",
      phone: "+918101858284",
      email: "royswastik047@gmail.com",
    },
    {
      name: "MMK Lechler",
      photo: mmk,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/flora_lechler?igsh=MXVpZDU3cDl1enFuMQ==",
      linkedin: "https://www.linkedin.com/in/mozes-mani-kumari-919728339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919381072245",
      email: "floramosses123@gmail.com",
    },
    {
      name: "Animesh",
      photo: animesh,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/madhumitaanimesh_nit_durgapur/",
      linkedin: "https://www.linkedin.com/in/animesh-satyapragyan-patra-0a6218242/",
      phone: "+919337269060",
      email: "animeshsatyapragyanpatra@gmail.com",
    },
    {
      name: "Suraj Kumar",
      photo: suraj,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/samir_arya_1326?igsh=MTQyYXVoYjcyamZndw==",
      linkedin: "#",
      phone: "+918102152665",
      email: "sk.23ce8050@nitdgp.ac.in",
    },
   
    {
      name: "Sashwata Ghosh",
      photo: shaswata,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/the_god_particle_01?igsh=bWFheGZid2xrN2lu",
      linkedin: "https://www.linkedin.com/in/shaswata-ghosh-nit-d?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+917603065660",
      email: "shaswatanitdgpofficial@gmail.com",
    },
    {
      name: "Vishu J",
      photo: vishu,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/vishu_judiyan?igsh=dHYwYjV1bjE1OW9v",
      linkedin: "#",
      phone: "+917017787510",
      email: "vishujudiyan2005@gmail.com",
    },
    {
      name: "Darshit R",
      photo: darshit,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/itsme_amanshaw/",
      linkedin: "#",
      phone: "+917976998315",
      email: "darshitrawal27@gmail.com",
    },
    {
      name: "Aman Shaw",
      photo: aman,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/itsme_amanshaw/",
      linkedin: "#",
      phone: "+917980271149",
      email: "ayushaman709@gmail.com",
    },
    {
      name: "Pulkit Sepat",
      photo: pulkit,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/invites/contact/?igsh=4ax7dddrgakh&utm_content=rui27b8",
      linkedin: "https://www.linkedin.com/in/pulkit-sepat-a3882a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+918000487872",
      email: "ps.23ch8047@nitdgp.ac.8n",
    },
    {
      name: "Gopeshwar Kumar",
      photo: gopeshwar,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/unique_gopeshwar_/",
      linkedin: "https://www.linkedin.com/in/gopeshwar-k-954a48265/",
      phone: "+916205731951",
      email: "gopeshwarkumark@gmail.com",
    },
    {
      name: "Srirama Sai Bhavana",
      photo: bhav,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/chinni_2213_/profilecard/?igsh=MXgyaXZkazBxc2liYg==",
      linkedin: "https://www.linkedin.com/in/srirama-saibhavana-9b42ab30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919381770556",
      email: "ss.23cs8153@nitdgp.ac.in",
    },
    {
      name: "Aditya Shaw",
      photo: aditya,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/a_d_i_t_y_as_h_a_w/?hl=en",
      linkedin: "https://www.linkedin.com/in/aditya-shaw-b5a3a430a/",
      phone: "+918961414207",
      email: "as.23mm8036@nitdgp.ac.in",
    },
    {
      name: "Debjyoti Shil",
      photo: debjyoti,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/debjyotishil10?igsh=MTdkNW5leThrejR2bg==",
      linkedin: "#",
      phone: "+917980524650",
      email: "debjyotishil03@gmail.com",
    },
    {
      name: "Shrutisadhan Mudly",
      photo: shruti,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/mudly_ss/",
      linkedin: "https://www.linkedin.com/in/shrutisadhan-mudly-ab4b342a4/",
      phone: "+918240064024",
      email: "sm.23ee8040@nitdgp.ac.in",
    },
    {
      name: "Soumyadeep Dey",
      photo: soumyadeep,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/off_soumyadeep.dey/",
      linkedin: "https://www.linkedin.com/in/soumyadeepd1/",
      phone: "+919531784836",
      email: "sd.23me8009@nitdgp.ac.in",
    },
    {
      name: "Srijan Maddheshiya",
      photo: srijan,
      domain: "Senior Coordinator",
      instagram: "https://www.instagram.com/srijan_maddeshiya/",
      linkedin: "https://www.linkedin.com/in/srijan-maddheshiya-5b7574298/",
      phone: "+919616172542",
      email: "sm.23me8142@nitdgp.ac.in",
    },
  ],
  secondYear: [
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
      name: "Shobhit Lakra",
      photo: shobhit,
      domain: "Event Management",
      instagram:
        "https://www.instagram.com/steven_shobhit_31?igsh=MTc1aGExYnRhZ3JuYw==",
      linkedin:
        "https://www.linkedin.com/in/shobhit-lakra-335314310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+919609303463",
      email: "shobhitlakra31@gmail.com",
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
      name: "Shivansh Pratap Chaudhary",
      photo: Shivansh,
      domain: "Video Editing",
      instagram: "https://www.instagram.com/shivanshjaypratap/#",
      linkedin:
        "https://www.linkedin.com/in/shivansh-pratap-chaudhary-1a6b84326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+917905226830",
      email: "pratapshivansh2005@gmail.com",
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
        "https://www.instagram.com/.pravat?igsh=ZjU2bDRoNmdwZnRn&utm_source=qr",
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
      name: "Pallavi Kumari",
      photo: pallavi,
      domain: "Graphic Design & Event Management",
      instagram:
        "https://www.instagram.com/pallavikumari_28?igsh=MXUwb2loNWE5YjM4cA==",
      linkedin:
        "https://www.linkedin.com/in/pallavi-kumari-02b78a31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_apps",
      phone: "+919547051031",
      email: "pk.24u10367@nitdgp.ac.in",
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
        "https://www.instagram.com/chandramouli_06?igsh=MXZtOWRjYnRtbWswdg==",
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
    {
      name: "Ishita Panda",
      photo: ishita,
      domain: "Event Management & Content Writing",
      instagram: "https://www.instagram.com/the_ipanda?igsh=YmMzYW5rejN1dXJs",
      linkedin: "https://www.linkedin.com/in/ishita-panda-2783ba355",
      phone: "+918436633569",
      email: "ip.24u10942@nitdgp.ac.in ",
    },
  ],
};


/* ---------------- MEMBER CARD ---------------- */
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

        <div className="hover-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${email}`} className="contact-link">{email}</a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href={`tel:${phone}`} className="contact-link">{phone}</a>
            </div>
            <div className="social-links">
              <a href={instagram} className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href={linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- TEAM PAGE ---------------- */
export default function TeamPage() {
  const [selectedTab, setSelectedTab] = React.useState("faculty");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.className = "particles-canvas";
    document.querySelector(".team-page").appendChild(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

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
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
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
      particles.forEach((p) => p.update() || p.draw());
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const renderMembers = (group) => (
    <div className="card-grid">
      {members[group].map((member, index) => (
        <MemberCard key={index} {...member} style={{ animationDelay: `${index * 0.1}s` }} />
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
              className={`tab-button ${selectedTab === group ? "active" : ""}`}
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

