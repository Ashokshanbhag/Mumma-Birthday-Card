var images = ["Untitled design.png",
              "If you are reading this that means.png",
              "If you are reading this that means (1).png",
              "If you are reading this that means (2).png",
              "If you are reading this that means (3).png",
              "If you are reading this that means (4).png",
              "If you are reading this that means (6).png",
              "If you are reading this that means (7).png",
              "If you are reading this that means (8).png",
              "If you are reading this that means (9).png",
              "If you are reading this that means (11).png",
              "If you are reading this that means (13).png",
              "If you are reading this that means (14).png",
              "If you are reading this that means (15).png",
              "If you are reading this that means (16).png",
              "If you are reading this that means (17).png",
              "If you are reading this that means (18).png",
              "If you are reading this that means (19).png",
              "If you are reading this that means (20).png",
              "If you are reading this that means (21).png",
              "If you are reading this that means (22).png",
              "If you are reading this that means (23).png",
              "If you are reading this that means (24).png",
              "If you are reading this that means (25).png",
              "If you are reading this that means (26).png",
              "If you are reading this that means (27).png",
              "If you are reading this that means (28).png",
              "If you are reading this that means (29).png",
              "If you are reading this that means (32).png",
              "If you are reading this that means (33).png",
              "If you are reading this that means (34).png",
              "If you are reading this that means (35).png",
              "If you are reading this that means (36).png",
              "If you are reading this that means (37).png"];

  var i=0;
  function nextslide(){
    if(i==36){
      i=0;
    }document.getElementById("album").src=images[i];
    i++;
  }