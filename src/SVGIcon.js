import React from "react";

// https://www.flaticon.com/
// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const getViewBox = name => {
    switch (name) {
        case "breakfast":
            return "0 -59 512 512";
        case "message":
            return "0 0 38 34";
        case "envelope":
            return "0 0 40 26";
        case "trash":
            return "0 0 13.5 17.5";
        case "wifi":
            return "0 0 12 9";
        default:
            return "0 0 32 32";
    }
};

const getPath = (name, props) => {
    switch (name) {
        case "breakfast":
            return (
                <React.Fragment>              
                <path
                {...props}
                d="m90.355469 362.136719h201.519531c6.84375 0 12.40625-5.566407 12.40625-12.40625v-179.300781c0-6.996094 3.730469-13.511719 9.730469-17 13.359375-7.769532 35.773437-24.136719 35.773437-46.5 0-38.007813-67.410156-74.488282-158.671875-74.488282-91.105469 0-158.671875 36.414063-158.671875 74.488282 0 22.457031 22.578125 38.867187 36.039063 46.652343 5.839843 3.378907 9.46875 9.628907 9.46875 16.3125v179.835938c0 6.839843 5.566406 12.40625 12.40625 12.40625zm-14.367188-221.539063c-8.582031-4.964844-28.542969-18.183594-28.542969-33.667968 0-24.832032 55.84375-59.488282 143.667969-59.488282 87.839844 0 143.671875 34.660156 143.671875 59.488282 0 15.40625-19.800781 28.582031-28.316406 33.53125-10.601562 6.164062-17.1875 17.648437-17.1875 29.96875v176.707031h-196.332031v-177.238281c0-12.023438-6.5-23.25-16.960938-29.300782zm0 0"
                />                
                <path
                {...props}
                 d="m149.238281 252.585938c2.929688 2.929687 7.679688 2.929687 10.605469 0l68.824219-68.820313c2.929687-2.929687 2.929687-7.679687 0-10.609375-2.929688-2.925781-7.679688-2.925781-10.609375 0l-68.820313 68.824219c-2.929687 2.925781-2.929687 7.675781 0 10.605469zm0 0"
                 />                
                 <path
                 {...props}
                  d="m140.558594 217.324219 52.847656-52.847657c2.929688-2.929687 2.929688-7.675781 0-10.605468-2.929688-2.929688-7.679688-2.929688-10.605469 0l-52.851562 52.847656c-2.925781 2.929688-2.925781 7.679688 0 10.605469 2.933593 2.929687 7.679687 2.929687 10.609375 0zm0 0"
                  />                
                  <path
                  {...props}
                   d="m184.496094 271.875c2.933594 2.925781 7.679687 2.925781 10.609375 0l52.847656-52.851562c2.929687-2.929688 2.929687-7.675782 0-10.605469-2.929687-2.929688-7.679687-2.929688-10.609375 0l-52.847656 52.847656c-2.925782 2.929687-2.925782 7.679687 0 10.609375zm0 0"
                   />                
                   <path
                   {...props}
                    d="m45.503906 177.546875v172.183594c0 24.730469 20.121094 44.847656 44.851563 44.847656h80.246093c4.144532 0 7.5-3.355469 7.5-7.5 0-4.140625-3.355468-7.5-7.5-7.5h-80.246093c-16.460938 0-29.851563-13.390625-29.851563-29.847656v-176.328125c0-2.617188-1.363281-5.046875-3.597656-6.410156-27.023438-16.449219-41.90625-37.78125-41.90625-60.0625 0-53.257813 81.191406-91.929688 176.117188-91.929688 95.0625 0 176.113281 38.742188 176.113281 91.929688 0 22.285156-14.882813 43.617187-41.90625 60.0625-2.234375 1.359374-3.601563 3.789062-3.601563 6.40625v176.332031c0 16.457031-13.390625 29.847656-29.847656 29.847656h-86.273438c-4.140624 0-7.5 3.355469-7.5 7.5s3.359376 7.5 7.5 7.5h216.046876c24.726562 0 44.847656-20.117187 44.847656-44.847656v-79.238281c0-4.144532-3.359375-7.503907-7.5-7.503907-4.144532 0-7.5 3.359375-7.5 7.503907v79.238281c0 16.457031-13.390625 29.847656-29.847656 29.847656h-96.324219c7.105469-7.953125 11.398437-18.535156 11.398437-29.847656v-172.183594c29.386719-19.011719 45.507813-43.964844 45.507813-70.617187 0-46.980469-46.566407-77.167969-91.292969-91.929688h29.949219c95.0625 0 176.113281 38.742188 176.113281 91.929688 0 20.339843-11.992188 39.476562-34.683594 55.351562-6.777344 4.742188-10.820312 12.542969-10.820312 20.863281v52.34375c0 4.144531 3.355468 7.5 7.5 7.5 4.140625 0 7.5-3.355469 7.5-7.5v-52.34375c0-3.429687 1.652344-6.632812 4.421875-8.570312 26.492187-18.535157 41.082031-42.558594 41.082031-67.644531 0-64.273438-89.152344-106.929688-191.113281-106.929688h-129.769531c-102.507813 0-191.117188 42.945312-191.117188 106.929688 0 26.652343 16.121094 51.601562 45.503906 70.617187zm0 0"
                    />
                    </React.Fragment>
            );
        case "message":
            return (
                <path
                    {...props}
                    d="M19.0675 0C8.5371 0 0 7.092 0 15.8401c0 5.5527 3.4417 10.4345 8.6471 13.2632.0083.0091.0221.0182.0434.0277.8433.3798.41 1.6817-.5651 2.8751-.742.9083-2.1668 1.8444-1.6251 1.8444.8667 0 2.7535-.4018 3.94-1.0597 1.7586-.9752 2.9897-1.8141 4.5758-1.469l-.0013-.0035a22.867 22.867 0 0 0 4.0527.3619c10.5309 0 19.0676-7.0916 19.0676-15.8401C38.1351 7.0921 29.5984 0 19.0675 0z"
                />
            );
        case "envelope":
            return (
                <path
                    {...props}
                    d="M 22.8196 15.7456C 22.0005 16.5862 20.9038 17.0508 19.7317 17.0542C 18.5632 17.0444 17.46 16.5994 16.6362 15.7646L 1.09009 0L 38.1626 0L 22.8196 15.7456ZM 0 1.06567L 11.2952 12.5818L 0 24.1392L 0 1.06567ZM 27.9519 12.623L 39.2878 24.1233L 39.2878 1.06567L 27.9519 12.623ZM 23.7844 16.9265L 27.0105 13.6885L 38.1833 25.082L 1.10547 25.082L 12.4006 13.6885L 15.6772 16.9512C 16.7539 18.0415 18.1877 18.6418 19.7185 18.6418L 19.7363 18.6418C 21.2734 18.6375 22.7109 18.0281 23.7844 16.9265Z"
                />
            );
        case "trash":
            return (
                <path
                    {...props}
                    d="M 8.18183 4.36365L 9.27274 4.36365L 9.27274 14.7273L 8.18183 14.7273L 8.18183 4.36365ZM 6.00001 4.36365L 7.09092 4.36365L 7.09092 14.7273L 6.00001 14.7273L 6.00001 4.36365ZM 3.81819 4.36365L 4.9091 4.36365L 4.9091 14.7273L 3.81819 14.7273L 3.81819 4.36365ZM 1.67946 2.72729L 2.72509 16.3216L 10.3636 16.3637L 11.4103 2.72729L 1.67946 2.72729ZM 7.512 1.08873L 5.56309 1.09091C 5.54127 1.10455 5.454 1.22236 5.454 1.41818L 5.454 1.63638L 7.63582 1.63638L 7.63582 1.41818C 7.63582 1.22236 7.54855 1.10455 7.512 1.08873ZM 5.56309 0L 7.52673 0C 8.19928 0 8.72673 0.622909 8.72673 1.41818L 8.72673 1.63638L 12.5885 1.63638L 13.0909 1.63638L 13.0909 2.72729L 12.5046 2.72729L 11.4524 16.4056C 11.454 16.9653 10.9642 17.4546 10.3631 17.4546L 2.72676 17.4546C 2.12511 17.4546 1.63585 16.9653 1.63585 16.3637L 0.585305 2.72729L 0 2.72729L 0 1.63638L 0.501262 1.63638L 4.36309 1.63638L 4.36309 1.41818C 4.36309 0.622909 4.89054 0 5.56309 0Z"
                />
            );
        case "wifi":
            return (
                <path
                    {...props}
                    d="M 5.99609 1.51367C 7.93604 1.51367 9.7041 2.22479 11.0596 3.39136L 12 2.35657C 10.3945 0.969788 8.29785 0 5.99561 0C 3.69775 0 1.60352 0.967163 0 2.35022L 0.938965 3.38574C 2.29395 2.22217 4.05908 1.51367 5.99609 1.51367ZM 5.91553 5.9726C 5.13672 5.9726 4.42383 6.28912 3.86963 6.74567L 5.91553 9L 7.96338 6.74792C 7.40918 6.29028 6.69531 5.9726 5.91553 5.9726ZM 9.01318 5.61206C 8.19385 4.92072 7.13184 4.5 5.96875 4.5C 4.80811 4.5 3.74756 4.91882 2.9292 5.60907L 1.93457 4.5127C 3.01758 3.58954 4.42578 2.98633 5.96924 2.98633C 7.51562 2.98633 8.92578 3.59143 10.0088 4.51721L 9.01318 5.61206Z"
                />
            );
        default:
            return <path />;
    }
};

const SVGIcon = ({
    name = "",
    // style = {},
    fill = "#000",
    viewBox = "",
    // width = "100%",
    className = "",
    // height = "100%"
}) => (
        <svg
            // width={width}
            // style={style}
            // height={height}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox || getViewBox(name)}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            {getPath(name, { fill })}
        </svg>
    );

export default SVGIcon;