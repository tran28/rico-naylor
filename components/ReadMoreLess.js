import { useState } from "react";

function ReadMoreLess({ text, limit }) {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };

    function truncateText(text, limit) {
        if (text.length > limit) {
            const lastSpaceIndex = text.lastIndexOf(' ', limit)
            if (lastSpaceIndex > 0) {
                return text.substring(0, lastSpaceIndex) + "..."
            } else {
                return text.substring(0, limit) + "..."
            }
        } else {
            return text;
        }
    }


    const truncatedText = truncateText(text, limit);
    const isTruncated = truncatedText !== text;

    return (
        <div className='flex flex-col items-start gap-2'>
            <p className='text-md'>{isShowMore ? text : truncatedText}</p>
            {isTruncated && (
                <button onClick={toggleReadMoreLess} className='text-sm font-light text-purple-700'>
                    {isShowMore ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
}

export default ReadMoreLess;