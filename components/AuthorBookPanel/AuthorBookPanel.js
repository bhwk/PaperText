import Image from 'next/image';
import Link from 'next/link';

const AuthorBooksPanel = ({
	booksDisplay,
	Increment,
	Decrement,
	currentBookIndex,
	totalBookNum,
	rowLimit,
}) => {
	const tableHeaders = ['Title', 'Chapters', 'Words', 'Views', ''];

	return (
		<>
			<div className='rounded-md mt-4 bg-base-300 p-6 flex flex-col'>
				<div className='flex flex-row justify-between items-center mb-2'>
					<h2 className='text-xl font-medium'>Your Books</h2>

					<Link href='/create/books/new' className='btn btn-sm'>
						Create
					</Link>
				</div>
				<div className='overflow-x-auto'>
					<table className='table w-full'>
						<thead className=''>
							<tr>
								{tableHeaders.map((header, i) => {
									return (
										<th key={i} className='normal-case'>
											{header}
										</th>
									);
								})}
							</tr>
						</thead>

						<tbody>
							{booksDisplay.map((book) => {
								return (
									<tr key={book.id}>
										<td>
											<div className='flex items-center space-x-3'>
												<div className='avatar'>
													<div className='mask mask-squircle w-12 h-12'>
														<Image
															unoptimized
															src={book.image_url}
															alt={book.title}
															width='48'
															height='48'
														/>
													</div>
												</div>
												<div>
													<div className='font-semibold'>
														{book.title}
													</div>
												</div>
											</div>
										</td>
										<td>{book.num_chapters}</td>
										<td>{book.num_words}</td>
										<td>999</td>
										<th>
											<Link
												href={`/create/books/${book.id}`}
											>
												<button className='btn btn-ghost btn-md'>
													Details
												</button>
											</Link>
										</th>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className='flex items-center mt-4'>
					<label className='w-full text-sm ml-1'>
						Showing{' '}
						<span className='font-semibold'>
							{currentBookIndex + 1}
						</span>{' '}
						to{' '}
						<span className='font-semibold'>
							{currentBookIndex + (rowLimit + 1) > totalBookNum
								? currentBookIndex +
								  (totalBookNum - currentBookIndex)
								: currentBookIndex + (rowLimit + 1)}
						</span>{' '}
						of <span className='font-semibold'>{totalBookNum}</span>{' '}
						results
					</label>
					<div className='flex rounded-sm flex-row-reverse right-0 ml-auto w-full'>
						<div className='space-x-2'>
							<button
								className='btn btn-sm btn-outline bg-base-200 border-gray-400 hover:bg-base-300 hover:text-base-content dark:border-gray-800 dark:hover:border-gray-700'
								onClick={Decrement}
							>
								Previous page
							</button>
							<button
								className='btn btn-sm btn-outline bg-base-200 border-gray-400 hover:bg-base-300 hover:text-base-content dark:border-gray-800 dark:hover:border-gray-700'
								onClick={Increment}
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthorBooksPanel;
