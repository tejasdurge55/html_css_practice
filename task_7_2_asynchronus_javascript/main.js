function submitbtn() {
  var textinput = document.querySelector("input").value;
  if (textinput != "") {
    document.querySelector("input").value = "";
    console.log(textinput);

    var info = document.getElementsByClassName("info")[0];
    var post = document.getElementsByClassName("post")[0];
    info.innerHTML = "hi-info";
    post.innerHTML = "hi-post";
    console.log(info);
    console.log(post);

    function infodata() {
      return new Promise((resolve, reject) => {
        async function getdatainfo() {
          var infourl =
            "https://jsonplaceholder.typicode.com/users/" + textinput;
          try {
            info.innerHTML = "getting response..";
            var responsinfo = await fetch(infourl);
            if (responsinfo.status != 200) {
              throw new Error(responsinfo.status);
            }
            var datainfo = await responsinfo.json();
            info.innerHTML = "";
            info.innerHTML += JSON.stringify(datainfo, null, 4);
            resolve("user info data retrieved");
          } catch (error) {
            info.innerHTML =
              "user info data retieval failed. Error code:" + error.message;
            reject("user info data failed");
          }
        }
        getdatainfo();
      });
    }

    function postdata() {
      return new Promise((resolve, reject) => {
        async function getdatapost() {
          var posturl =
            "https://jsonplaceholder.typicode.com/posts/" + textinput;
          try {
            post.innerHTML = "getting response..";
            var responspost = await fetch(posturl);
            if (responspost.status != 200) {
              throw new Error(responspost.status);
            }
            var datapost = await responspost.json();
            post.innerHTML = "";
            post.innerHTML += JSON.stringify(datapost, null, 2);
            resolve("post data retrieved");
          } catch (error) {
            post.innerHTML =
              "posts data retieval failed.Error code:" + error.message;
            reject("post data failed");
          }
        }
        getdatapost();
      });
    }
    console.log("starting");
    Promise.all([postdata(), infodata()])
      .then((results) => {
        console.log("All steps completed", results);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
}
