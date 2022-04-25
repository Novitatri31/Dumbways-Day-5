let blogs = []
const listMonth = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
]

function addBlog(event) {
   event.preventDefault()

   let namaProject = document.getElementById('namaProject').value
   let startDate = document.getElementById('startDate').value
   let endDate = document.getElementById('endDate').value
   let technologies = {

      nodeJs: document.querySelector('input[name="checkbox1"]').checked,
      reactJs: document.querySelector('input[name="checkbox2"]').checked,
      nextJs: document.querySelector('input[name="checkbox3"]').checked,
      typeScript: document.querySelector('input[name="checkbox4"]').checked,
   }
   let deskripsi = document.getElementById('deskripsi').value
   let image = document.getElementById('gambar')


   //console.log(namaProject) 
   //console.log(startDate) 
   //console.log(endDate) 
   //console.log(deskripsi)
   //console.log(technologies)
   //console.log(image)


   let tabelObject = {
      namaProject: namaProject,
      startDate: startDate,
      endDate: endDate,
      deskripsi: deskripsi,
      technologies: technologies,
      image: URL.createObjectURL(image.files[0]),
      postedAt: new Date()
   }

   blogs.push(tabelObject);
   renderBlog()
   

}

function renderBlog() {
   let lengthData = blogs.length
   console.table(blogs);
   let blogContainer = document.getElementById('contentBlog');
   
   blogContainer.innerHTML = firstBlogContent();
   for (let index = 0; index < lengthData; index++) {
    blogContainer.innerHTML += `
      <div class="card" >
          <img src=${blogs[index].image} alt="">
          <div class="card-desk">
              <h4>${blogs[index].namaProject}-2021</h4>
              <h6>${getFullTime(blogs[index].postedAt)}</h6>
              <h6>durasi:${timeDuration(blogs[index].endDate, blogs[index].startDate)}</h6>
              <p>${blogs[index].deskripsi}.</p>
          </div>
          <div class="icon">
              ${(blogs[index].technologies.nodeJs)?`<i class="fa-brands fa-google-play"></i>`: ` `}
              ${(blogs[index].technologies.reactJs)?`<i class="fa-brands fa-android"></i>`: ` `}
              ${(blogs[index].technologies.nextJs)?`<i class="fa-brands fa-java"></i>`: ` `}
              ${(blogs[index].technologies.typeScript)?`<i class="fa-brands fa-js"></i>`: ` `}
          </div>
          <div class="footer">
              <button class="submit">edit</button>
              <button class="submit">delete</button>
          </div>
      </div>
  </div>`
  
  
  }
  
  
}

function firstBlogContent () {
 return `
 <div class="card" >
     <img src="assets/image/img1.jfif" alt="">
     <div class="card-desk">
         <h4>Dumbways Mobile App-2021</h4>
         <h6>Detail time</h6>
         <h6>Duration</h6>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi iste, autem facere aut nam
             tempore, qui natus rem non tempora hic quia laboriosam quae.</p>
     </div>
     <div class="icon">
         <i class="fa-brands fa-google-play"></i>
         <i class="fa-brands fa-android"></i>
         <i class="fa-brands fa-java"></i>
         <i class="fa-brands fa-js"></i>
     </div>
     <div class="footer">
         <button class="submit">edit</button>
         <button class="submit">delete</button>
     </div>
 </div>
</div>`
}

function getFullTime (time){
 console.log(time)

 const date = time.getDate()
 const month = time.getMonth()
 const year = time.getFullYear()
 const hour = time.getHours()
 const minute = time.getMinutes()

 console.log(date)
 console.log(month)
 console.log(year)
 console.log(hour)
 console.log(minute)


 return `${date} ${listMonth[month]} ${year} ${hour}:${minute} WIB`

}

function timeDuration (end, start){
    
    let distance = new Date(end) - new Date(start)
    
    let milisecond = 1000
    let secondToMinute = 60
    let minuteToHour = 60
    let secondToHour = 3600
    let hourToDay = 23
    let dayToMonth = 30

    let monthDistance = distance / ( milisecond * secondToHour * hourToDay * dayToMonth)
    console.log(monthDistance)
    
    if (monthDistance >= 1){ 
        let monthResult = Math.floor (monthDistance)
        console.log(monthResult)
        return monthResult + `bulan`

     } else {
        let dayresult = Math.floor(distance / (milisecond * secondToHour * hourToDay)) 
        if(dayresult < 1)
        console.log(dayresult)
        return dayresult  + 'hari'
     }


}






  
