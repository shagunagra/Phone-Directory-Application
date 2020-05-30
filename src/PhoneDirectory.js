import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state = {
            subscriberList:  [
                {
                    id:1,
                    name: 'shagun',
                    phone: '7355751091'
                },
                {
                    id:2,
                    name: 'happy',
                    phone: '7988208960'
                }
            ]
        }
    }

    deleteSubscriberHandler = (subescriberId) => {
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;
        subscriberList.forEach(function(subscriber, index){
            if(subscriber.id === subescriberId){
                subscriberIndex = index;
            }
        }, this);
        let newSubscriber = subscriberList;
        newSubscriber.splice(subscriberIndex, 1);
        this.setState({subscriber: newSubscriber});
    }
    addsubscriberHandler = (newsubscriber) => {
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length>0){
            newsubscriber.id = subscriberList[subscriberList.length-1].id+1;
        }
        else{
            newsubscriber.id=1;
        }
        subscriberList.push(newsubscriber);
        this.setState({subscriberList: subscriberList});
    }
    render(){
        return(
          <Router>
              <Route exact path='/' render={(props) => <ShowSubscriber {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>}/>
              <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addsubscriberHandler={this.addsubscriberHandler}/>}/>
          </Router>
        )
    }
}

export default PhoneDirectory;