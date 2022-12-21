import React from 'react'
import Link from 'next/link'
import { FileDoc, FilePdf, FileZip } from '../public/svg/icon'
import { Check } from '../public/svg/icon'

export default function List() {
    return (
        <>
<div className="service_list_as_function">
									<div className="title">
										<h3>Full list of Services</h3>
									</div>
									<div className="list_holder">
									<ul>
											<li><Link href="/services/junk-removal"><a>Junk Removal</a></Link></li>
											<li><Link href="/services/property-cleanout"><a>Property Cleanout</a></Link></li>
											<li><Link href="/services/commercial-cleanout"><a>Commercial Cleanout</a></Link></li>
											<li><Link href="/services/storage-cleanout"><a>Storage Cleanout</a></Link></li>
											<li><Link href="/services/appliance-removal"><a>Appliance Removal</a></Link></li>
											<li><Link href="/services/construction-removal"><a>Construction Debris Removal</a></Link></li>
										</ul>
									</div>
								</div>
        </>
    )
}





