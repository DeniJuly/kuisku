import React from 'react';

const Brand = ({ children, mode }) => {
	return (
		<div className="flex items-center justify-between brand-area">
			<div className="flex items-center brand">
				{
					<img
						src={`/assets/images/${mode == "compact" ? "logo-simple.png" : "logo-vertical-light.svg"}`}
						alt="company-logo"
						height={mode == "compact" ? "24px" : "40px"}
					/>
				}
			</div>
			{children}
		</div>
	);
};

export default Brand;
