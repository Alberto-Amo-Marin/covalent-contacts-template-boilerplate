import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutScreenService {

  private screenWidth: number;
  private mobile: boolean;
  private tablet: boolean;
  private desktop: boolean;

  constructor() { 
    this.screenSizeChangeHandler();
  }

  screenResizing(){
    window.onresize = () => {
      this.screenSizeChangeHandler();
    };
  }

  private screenSizeChangeHandler(): void {
    this.screenWidth = window.innerWidth;
    this.screenSizeChangeCondition();
  }

  private screenSizeChangeCondition(): void {
    this.desktop = this.mobile = this.tablet = false;
    if (this.screenWidth > 900) this.desktop = true;
    else if (this.screenWidth > 540 && this.screenWidth < 900) this.tablet = true;
    else if (this.screenWidth < 540) this.mobile = true;
  }

  isDesktop(): boolean {
    return this.desktop;
  }
  
  isMobile(): boolean {
    return this.mobile;
  }

  isTablet(): boolean{
    return this.tablet;
  }

}
