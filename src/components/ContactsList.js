import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function ContactsList({ contacts }) {
	return (
		<>
			<header>
				<h2>Contacts</h2>
			</header>
			<ul className='contacts-list'>
				{contacts.map((contact, index) => {
					const { firstName, lastName } = contact;
					return (
						<li className='contact' key={index}>
							<p>
								{firstName} {lastName}
							</p>
							<p>
								<Link to={`/contacts/${contact.id}`}>View</Link>
							</p>
							<p>Delete</p>
							<p>Edit</p>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default ContactsList;
