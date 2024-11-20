import './ScreenHeading.css';

export default function ScreenHeading({title, subHeading}: {title: string, subHeading: string}) {
    return (
        <div className='flex flex-col items-center w-full px-5 sm:px-0'>
            <div className='screen-heading'>
                <span>{title}</span>
            </div>

            {subHeading ? (
                <div className='screen-sub-heading'>
                    <span>{subHeading}</span>
                </div>
            ) : (<div/>
            )}

            <div className='heading-separator'>
                <div className='separator-line'>

                    <div/>
                </div>
            </div>
        </div>
    )
}

