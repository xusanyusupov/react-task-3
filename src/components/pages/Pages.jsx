import React from 'react'

const Pages = ({bgImg,title,lists,bottomTitle,bottomInfo,listBtn,color}) => {
    const liRender = lists?.map((item,index) => (
        <li key={index}>{item}</li>
    ))

    const btnRender = listBtn?.map((el) => (
        <button>{el}</button>
    ))

  return (
    <section>
        <div className="container">
            <div style={{ background: `url(${bgImg}) no-repeat center/cover`}} className="pages__wrapper">
                <div style={{color:`${color}`}} className='topItem'>
                    <h1>{title}</h1>
                    <ul>
                        {liRender}
                    </ul>
                </div>
                <div style={{color:`${color}`}} className='bottomItem'>
                    <h2>{bottomTitle}</h2>
                    <p>{bottomInfo}</p>
                    {btnRender}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pages