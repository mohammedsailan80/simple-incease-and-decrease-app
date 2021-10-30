import React ,{Fragment} from 'react'
import {connect} from 'react-redux'
import './add_minus_form.css'

class AddandMinus extends React.Component {
    render(){
        return (
           <Fragment>
            <div className="card">
                    <form>
                        <input value={this.props.count}  disabled/>
                        <button onClick={this.props.increase}>Increase +1</button>
                        <button onClick={this.props.decrease}>Decrease -1</button>
                    </form>
            </div>

           </Fragment>

        )
    }
}

function mapStateToProps(state) {
    return{
        count: state.count,
    }
}

function mapDispatchToProps(dispatch){
    
    return{
        increase: (e)=>{
             e.preventDefault(); 
            dispatch({type: 'INCREASE'})},
        decrease: (e)=>{
            e.preventDefault(); 
           dispatch({type: 'DECREASE'})},
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (AddandMinus)
