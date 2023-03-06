function displayHikeInformation() {
    // retrieve the document id from the url
    let params = new URL(window.location.href);
    let ID = params.searchParams.get("docID");

    db.collection("hikes").doc(ID).get()
        .then(
            thisHike => {
                hikeInfo = thisHike.data();
                console.log(hikeInfo);

                hikeCode = hikeInfo.code;
                hikeName = hikeInfo.name;

                document.getElementById("hikeName").innerHTML = hikeName;
                let imgEvent = document.querySelector( ".hike-img" );
                imgEvent.src = "../images/" + hikeCode + ".jpg";
            }
        )
}

displayHikeInformation();