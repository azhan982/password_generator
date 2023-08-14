class GenratePassword {
    constructor() {
        this.pass = ''
    }
  GetPass(len) {
    let apha = 'abcdejghijklmnopqrstuvwxyz'
    let num = '1234567890'
    let spr = '!@#$%^&*()'

      if (len< 3) {
        alert('Password can be atleat 3 digits')
        return none
      }
      else{
       let i=0
        while(i<len) {
            this.pass +=apha[Math.round(Math.random()*apha.length)]
            this.pass +=num[Math.round(Math.random()*num.length)]
            this.pass +=spr[Math.round(Math.random()*spr.length)]
            i+=3
        }
        this.pass = this.pass.substring(0,len)
        return this.pass
      }
  }
}

let h1 = new GenratePassword()




ip.value = ''


cick.addEventListener('click',() =>{
  let val = ip.value
  val = Number.parseInt(val)
  wrt.innerHTML = `<b>${h1.GetPass(val)}<b/>`
  ip.value = ''
})