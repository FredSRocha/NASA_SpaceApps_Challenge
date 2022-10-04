const url = "https://api.nasa.gov/planetary/apod?api_key=rTbP1vbzCXJWjgMz6F8VwMmIGvpKfOyPRyfP4sOS&date=2021-01-12"

$.ajax({
  url: url, 
  success: function(result) {
    console.log(result)
    if("copyright" in result) {
      $("#copyright").text("Image Credits: " + result.copyright)
    }
    else {
      $("#copyright").text("Image Credits: " + "Public Domain")
    }
    
    if(result.media_type == "video") {
      $("#apod_img_id").css("display", "none") 
      $("#apod_vid_id").attr("src", result.url)
    }
    else {
      $("#apod_vid_id").css("display", "none") 
      $("#apod_img_id").attr("src", result.url)
    }
    $("#reqObject").text(url)
    $("#returnObject").text(JSON.stringify(result, null, 4))
    const explanation = result.explanation
    var [setOnlyExplanation] = explanation.split(' APOD in world languages: '); 
    $("#apod_explaination").text(setOnlyExplanation)
    $("#apod_title").text(result.title)
  }
})