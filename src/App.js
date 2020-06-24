import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Quick from './QuickLinks-components';
import Item1 from './item1-components';
import Item2 from './item2-components';
import Item3 from './item3-components';
import Item4 from './item4-component';
import Item5 from './item5-components';
import Item6 from './item6-components';
import Item7 from './item7-components';
import Item8 from './item8-components';

function App() {
  return (
    <div className="App">
		<div class='container-fluid'>
			<div class='row'>

				{/* left column starts here */}
				<div class='col-md-3'>

					<Quick />

				</div>
				{/* left column ends here */}

				{/* right column starts here */}	
				<div class='col-md-9' style={{backgroundColor: '#e6e5e3',marginLeft: '-7vw'}}>
					<div class='row' style={{marginTop: '2vh'}}>
						<div class='col-md-3' style={{marginBottom: '2vh'}}>
							<Item1 name='Ladies Leather Bag' />
						</div>
						<div class='col-md-3'>
							<Item2 name='Ladies Hand Bag Diamond'/>
						</div>
						<div class='col-md-3'>
							<Item3 name='Ash Bag Proper'/>
						</div>
						<div class='col-md-3'>
							<Item4 name='Kokoo Bag'/>
						</div>
						<div class='col-md-3' style={{marginBottom: '2vh'}}>
							<Item5 name='Executive Bag'/>
						</div>
						<div class='col-md-3'>
							<Item6 name='Bag Pack'/>
						</div>
						<div class='col-md-3'>
							<Item7 name='Brown Leather Bag'/>
						</div>
						<div class='col-md-3'>
							<Item8 name='El-Classico'/>
						</div>
						
					</div>
				

				{/* right column ends here */}

				</div>
			</div>

		</div>
    </div>
  );
}

export default App;

