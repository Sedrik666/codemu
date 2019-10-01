import React from 'react';

class Navigation extends React.Component{
    render(){
        const {currentPage, maxPage} = this.props;
        return(
            <div>
                <button onClick={this.props.changePage.bind(false, -1)}
                        disabled={currentPage===1}
                >
                    Prev
                </button >
                <button onClick={this.props.changePage.bind(false, 1)}
                        disabled={currentPage===maxPage}
                >
                    Next
                </button>
            </div>
        );
    }
}

export default Navigation;
