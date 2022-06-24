$.getJSON("accounts.json", function(data){
    $.ajax({
    url: "function.php",
    method:"POST",
    data: data,
    dataType: "json",
    success: function(data) {
      var data = data[0][0];
      $('#image-profile').attr('src', data.Image);
      $('.name').text(data.Name);
      $('#position').text(data.Position);
      $('#bio').text(data.Bio);
      $.each(data.Hobbies, function(data, value) {
        $('#hobbies').append(`<h3 class="text-center text-1xl text-gray-500 shadow-lg p-2 hover:bg-blue-500">${value}</h3>`)
      });
      $('.gender').text(data.Gender);
      $('.phone').text(data.Phone);
      $('.currentaddress').text(data.CurrentAddress);
      $('.permanentaddress').text(data.PermanentAddress);
      $('.email').attr('href', `mailto:${data.Email}`);
      $('.email').text(data.Email);
      $('.birthday').text(data.Birthday);
      $.each(data.Experience, function(key, value) {
        $('.experience').append(`
        <li>
        <div class="text-teal-600">${value.Position} at ${value.Company}</div>
        <div class="text-gray-500 text-xs">${value.Date}</div>
        </li>
        `);
      });
      $.each(data.Education, function(key, value) {
        $('.education').append(`
        <li>
            <div class="text-teal-600">${value.School}</div>
            <div class="text-gray-500 text-xs">${value.Date}</div>
        </li>
        `);
      });
    }
  })
}).fail(function(){
  console.log("An error has occurred.");
});