import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutScreenService {

  private screenWidth: number;
  private mobile: boolean;
  private tablet: boolean;
  private desktop: boolean;

  private desktopWidth: number = 900;
  private tabletWidth: number = [540, 900];
  private mobileWidth: number = 540;

  constructor() { 
    this.screenSizeChangeHandler();
  }

  screenResizing(){
    window.onresize = () => {
      this.screenSizeChangeHandler();
    };
  }

  setDesktopWidth(width: number){
    this.desktopWidth = width;
  }

  getDesktopWidth(): number{
    return this.desktopWidth;
  }

  setTabletWidth(widthStart: number, widthEnd: number) {
    this.setTabletWidthStart(widthStart);
    this.setTabletWidthEnd(widthEnd);
  }

  setTabletWidthStart(widthStart: number) {
    this.tabletWidth[0] = widthStart;
  }

  setTabletWidthEnd(widthEnd: number) {
    this.tabletWidth[1] = widthEnd;
  }

  getTabletWidthStart(): number {
    return this.tabletWidth[0];
  }

  getTabletWidthEnd(): number {
    return this.tabletWidth[1];
  }

  setMobileWidth(width: number) {
    this.mobileWidth = width;
  }

  getMobileWidth(): number {
    return this.mobileWidth;
  }

  getScreenWidth(): number {
    return this.screenWidth;
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

  private screenSizeChangeHandler(): void {
    this.screenWidth = window.innerWidth;
    this.screenSizeChangeCondition();
  }

  private screenSizeChangeCondition(): void {
    this.desktop = this.mobile = this.tablet = false;
    if (this.screenDesktopCondition()) this.desktop = true;
    else if (this.screenTabletCondition()) this.tablet = true;
    else if (this.screenMobileCondition()) this.mobile = true;
  }


  private screenDesktopCondition(): boolean{
    return this.screenWidth > this.getDesktopWidth();
  }

  private screenMobileCondition(): boolean {
    return this.screenWidth < this.getMobileWidth();
  }

  private screenTabletCondition(): boolean{
    return this.screenWidth > this.getTabletWidthStart() && 
           this.screenWidth < this.getTabletWidthEnd();
  }

}
