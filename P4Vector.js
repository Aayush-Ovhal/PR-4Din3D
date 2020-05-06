class P4Vector {
    constructor(x, y, z, w) {
      this.x = x ;
      this.y = y ;
      this.z = z ;
      this.w = w ;
    }
  
    mult(f) {
      this.x *= f;
      this.y *= f;
      this.z *= f;
      this.w *= f;
    }
  }