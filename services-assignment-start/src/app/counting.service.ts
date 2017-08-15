export class CountingService{
    activeCount: number = 0;
    inactiveCount: number = 0;
    incActive(){
        this.activeCount++;
        console.log("activeCount = "+this.activeCount);
    }
    incInactive(){
        this.inactiveCount++;
        console.log("inactiveCount = "+this.inactiveCount);
    }
}