import * as React from 'react';

export interface Props {
    title: string;
}

export default class Header extends React.Component<Props> {
  public render() {
    return (
        <div className = 'px-2 py-4 border-b'>
            <div className = 'container'>
                <p className='text-3xl font-bold text-black'>{this.props.title}</p>
            </div>
        </div>
    );
  }
}
