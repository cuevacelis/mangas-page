/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function Slider(params) {
	const [dataFetch, setDataFetch] = useState([
		{
			id: 0,
			title: "trabajo incognito",
			imgUrl:
				"http://occ-0-7152-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeAclQ0Mj_c6xE-X_PU_23wZAeiPZNbpiqS0X0JxOqu--2VhKkAI9Ju2odNFuvgd-zLpfdH6eBhOYWjXVdcD1eWfeSvQPmf75P0O5T0zEa1LPX5OMcTpu7Cc6QJlCWC3SE3n.jpg?r=1d7",
		},
		{
			id: 1,
			title: "trabajo incognito",
			imgUrl:
				"http://occ-0-7152-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY1QPEhbAKknNJ1x8IlXg4yuhYdwaeTfWkBMrNl5qjR5b3Qi54GZukQPvTvoNBAyOSSVSBRTKzGjSF0pFt3FYXmLBsksCtvfAZL9glB5m_al3UFIRxrwohGcQ2DGDkL_IXHa.jpg?r=4f6",
		},
		{
			id: 2,
			title: "trabajo incognito",
			imgUrl:
				"http://occ-0-7152-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYEqwG1C1CKVxCz6zPuFJUicSvm3tmVZEQPGFYDgXClpLIRJeQtehTcBacgiJndOtokL4Vq2s1dm26tDmHDeRid8ZdPaFV4RQTUwrRA5jaTnRPkHFDQ_nXwsQH-r1HsXbX4T.jpg?r=a30",
		},
		{
			id: 3,
			title: "trabajo incognito",
			imgUrl:
				"http://occ-0-7152-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRFT0D0pKnMUGHDJmBVgorQf1YPHk49a459AxS5YzmzMidCjcjAI-aliY6ZPONZ5J79kfuP5u8Hk6YfQofeLgnvtupOkb0vvwjR_UNFfjf8r4tssjtaWUwRPBVsmgl5nKw4QMOOcmN7770o7xjfQVMol6j4bZlWNYpTh_rY974uPm11XNcvngRnrVv50r1g.jpg?r=ae4",
		},
		{
			id: 4,
			title: "trabajo incognito",
			imgUrl:
				"http://occ-0-7152-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQs6irXU-ZS9rIa9ObNz_jNqq1hN7OBkHiWHknMB3i-jtjgMeVQ50CAiO-5nXwc-san45l1NtQpYE6ZuIVSASUcmWqn2dtsLl3wwxjBvR7IwBW4NNUWiuw73loj9l0s89Hpk.jpg?r=ae3",
		},
		{
			id: 5,
			title: "trabajo incognito",
			imgUrl:
				"http://occ-0-7152-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVSAkgUir1dbSCVQ9Zd2KXeKuD9-BTj1bZJhT1SDFSrP4FXnmK--DXpk9AWsy6z3CTIRXnS1rJOg0_iWdEe7eYg0a93Ge7BROK89RB-nV_8Wl7sJFFap_e05y39sctievY4TVvjZrO0o1WQ-a0AWXsDCAtDXe1vdS5kouom-3DfHXbQlJ5CS_vegYrNhudQ.jpg?r=422",
		},
		{
			id: 6,
			title: "trabajo incognito",
			imgUrl:
				"http://occ-0-7152-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeKDOcDfjRrbz_LSd1cpCJD5AP_kKEXgzhB0zuAt-KOoCdjxwhiEk1NNF_xwn1MDB0thCBIUTDbLUs_0FLiHk0cU3l7dYdBwXJY.webp?r=ed1",
		},
	]);
	const [data, setData] = useState([]);
	const positionStart = useRef(0);
	const positionEnd = useRef(0);
	const lengthArray = useRef(0);
	const lengthDesplazamiento = useRef(1);

	const windowsSize = useWindowSize();
	console.log("start", positionStart.current);
	console.log("length", lengthArray.current);
	console.log("end", positionEnd.current);

	//cambio resultados dependiendo del width
	useEffect(() => {
		if (windowsSize.width) {
			if (windowsSize.width < 700) {
				lengthArray.current = 2;
				lengthDesplazamiento.current = 2;
			} else if (windowsSize.width < 800) {
				lengthArray.current = 3;
				lengthDesplazamiento.current = 2;
			} else if (windowsSize.width < 1000) {
				lengthArray.current = 4;
				lengthDesplazamiento.current = 2;
			} else if (windowsSize.width < 1200) {
				lengthArray.current = 5;
				lengthDesplazamiento.current = 1;
			} else if (windowsSize.width < 1700) {
				lengthArray.current = 6;
				lengthDesplazamiento.current = 1;
			} else {
				lengthArray.current = 7;
				lengthDesplazamiento.current = 1;
			}
		}
		positionEnd.current = positionStart.current + lengthArray.current;
		setData(dataFetch.slice(positionStart.current, positionEnd.current + 1));
	}, [windowsSize.width]);

	//next
	const next = () => {
		positionStart.current =
			positionStart.current + lengthDesplazamiento.current;
		positionEnd.current = positionEnd.current + lengthDesplazamiento.current;
		setData(dataFetch.slice(positionStart.current, positionEnd.current + 1));
	};

	//previous
	const previous = () => {
		positionStart.current =
			positionStart.current - lengthDesplazamiento.current;
		positionEnd.current = positionEnd.current - lengthDesplazamiento.current;
		setData(dataFetch.slice(positionStart.current, positionEnd.current + 1));
	};

	return (
		<section className="w-full flex justify-center">
			<section className="overflow-hidden">
				<div className="px-[4%] relative">
					<span
						onClick={previous}
						className="font-nfIcon absolute z-10 flex items-center justify-center bg-[hsla(0,0%,8%,.5)] w-[4%] top-0 bottom-0 left-[-2px]"
						tabIndex="0"
						role="button"
						aria-label="Ver menos títulos"
					>
						<b className="before:content-['\e868'] text-white scale-125"></b>
					</span>
					<div className="overflow-x-visible">
						<section className="flex w-full transition-[transform_250ms_ease-in-out] [transform:_translate3d(-0%,_0px,_0px)]">
							{data.map((df) => {
								return (
									<div
										key={df.id}
										className="inline-block aspect-video shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-full overflow-hidden m-[0_0.2vw] rounded-sm"
									>
										<img
											className="w-full h-full object-cover"
											src={df.imgUrl}
											alt=""
										/>
									</div>
								);
							})}
						</section>
					</div>
					<span
						onClick={next}
						className="font-nfIcon absolute z-10 flex items-center justify-center bg-[hsla(0,0%,8%,.5)] w-[4%] top-0 bottom-0 right-[-2px]"
						tabIndex="0"
						role="button"
						aria-label="Ver más títulos"
					>
						<b className="before:content-['\e867'] text-white scale-125"></b>
					</span>
				</div>
			</section>
		</section>
	);
}
