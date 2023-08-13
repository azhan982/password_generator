class GenratePassword {
    constructor() {
        this.pass = ''
    }
  GetPass(len) {
    let apha = 'abcdejghijklmnopqrstuvwxyz'
    let num = '1234567890'
    let spr = '!@#$%^&*()'

      if (len< 3) {
        console.log('Password can be atleat 3 digits')
      }
      else{
        i=0
        while(i<len) {
            this.pass +=apha[Math.round(Math.random()*apha.length)]
            this.pass +=num[Math.round(Math.random()*apha.length)]
            this.pass +=spr[Math.round(Math.random()*apha.length)]
            i+=3
        }
        this.pass = this.pass.substring(0,len)
        return this.pass
      }
  }
}

let h1 = new GenratePassword()

console.log(h1.GetPass(8))