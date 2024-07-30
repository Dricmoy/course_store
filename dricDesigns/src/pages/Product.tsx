import * as React from 'react';

type Image = {
    src: string,
    alt: string,
}

type Props = {
    title: string,
    description: string,
    images: Image[],
    price?: number,
}


export default class Product extends React.Component<Props> {
  public render() {
    return (
      <div className='container p-0 mt-10 border-l border-r border-b rounded grid grid-cols-3'>
        <img className="col-span-4 w-full h-[80vh] object-cover" src={this.props.images[0].src} alt={this.props.images[0].alt}></img>
        <div className='col-span-2 border-t'>
            <h1 className='text-4xl font-serif border-b p-6'>{this.props.title}</h1>
            <p className='text-gray-900 p-6'>{this.props.description}</p>
        </div>  
        <div className='border-l border-t p-6 flex flex-col'>
            <button className="bg-blue-300 border-black text-white hover:bg-blue-200 font-bold rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0.0.0.1)] focus-outline:none border-gray-900 hover:border-black border-2">Buy now!</button>
        </div>
      </div>
    );
  }
}
