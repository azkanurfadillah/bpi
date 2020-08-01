import Link from 'next/link';

const Navbar = () => (
	<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
		<a className='navbar-brand' href='/'>
			BitzPrice
		</a>
		<button
			className='navbar-toggler'
			type='button'
			data-toggle='collapse'
			data-target='#navbarColor02'
			aria-controls='navbarColor02'
			aria-expanded='false'
			aria-label='Toggle navigation'
		>
			<span className='navbar-toggler-icon'></span>
		</button>

		<div className='collapse navbar-collapse' id='navbarColor02'>
			<ul className='navbar-nav mr-auto'>
				<li className='nav-item active'>
					<Link href='/'>
						<a className='nav-link' href='/'>
							Home <span className='sr-only'>(current)</span>
						</a>
					</Link>
				</li>
				<li className='nav-item'>
					<Link href='/about'>
						<a className='nav-link'>About</a>
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;

{
	/* <div>
	

		<style jsx>{`
			ul {
				background: #333;
				color: #fff;
				list-style: none;
				display: flex;
			}

			ul li {
				font-size: 18px;
				margin-right: 20px;
			}

			ul li a {
				color: #fff;
				text-decoration: none;
			}
		`}</style>
	</div> */
}
