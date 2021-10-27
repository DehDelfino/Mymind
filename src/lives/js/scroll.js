document.addEventListener('scroll', () => {

  // const header = document.getElementById('header')

  if (document.scrollY >= 50) {
      // header.style.display = 'none'
      console.log("scoorro")
  } else {
      // header.style.display = 'fixed'
      console.log('mlds')
  }
})