class Queue
{
    constructor()
    {
        this.data=[];
    }
    enqueue(element)
    {

        return this.data.push(element); 
    }

    isEmpty()
    {
        return this.data.length=0;
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            return 'Underflow';
            // return this.data.shift();
        }
    }
}
const queueData=new Queue();

//underflow
console.log(queueData.dequeue());
//return true
// console.log(queueData.isEmpty());



