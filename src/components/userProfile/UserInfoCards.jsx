// Pagina non funzionante e legata ad un component che scriverò martedì 20/02


// import { Button } from "react-bootstrap"; 
// import { EyeFill, ArrowRight, PenFill, Plus } from "react-bootstrap-icons";
// import { useState } from "react"; 
// import WorkExperienceComponent from "./WorkExperienceComponent"; // file che implementerò successivamente

// const UserInfoCards = (props) => {
// 	// Utilizzo useState per creare una variabile di stato 'show' per controllare la visibilità della modal
// 	const [show, setShow] = useState(false);
// 	// Definisco handleClose per impostare 'show' su false, chiudendo la modal
// 	const handleClose = () => setShow(false);
// 	// Definisco handleShow per impostare 'show' su true, aprendo la modal
// 	const handleShow = () => setShow(true);


// 	return (
// 		<div className="bg-white rounded-3 overflow-hidden mt-3 pt-3 px-4 border border-2">
// 			<div className="d-flex justify-content-between">
// 				{/* Mostro il titolo passato come prop */}
// 				<h4 className="mb-0">{props.title}</h4>
// 				{/* Controllo il valore della prop 'side' e, se è uguale a "button", mostro bottone eicona */}
// 				{props.side === "button" && (
// 					<div>
// 						{/* Bottone per creare post c */}
// 						<Button className="me-3 rounded-pill" variant="outline-primary">
// 							Create a post
// 						</Button>
// 						{/* icona di modifica */}
// 						<PenFill width={24} height={24} />
// 					</div>
// 				)}
// 				{/* Se 'side' è uguale a "plus", mostro un altro bottone con l'icona plus e, se 'show' è true, anche la modal */}
// 				{props.side === "plus" && (
// 					<div>
// 						{/* Bottone con icona Plus per aggiungere nuove esperienze o informazioni, che apre la modal al click se tutto va bene */}
// 						<Button className="me-3 rounded-pill" variant="none" onClick={handleShow}>
// 							<Plus width={32} height={32} />
// 						</Button>
// 						{/* Se 'show' è true, renderizzo il componente ModalComponent passando props necessarie per il suo funzionamento */}
// 						{show && (
// 							<WorkExperienceComponent
// 								show={show}
// 								handleClose={handleClose}
// 								handleSetExperience={props.handleSetExperience}
// 							/>
// 						)}
// 						<PenFill width={24} height={24} />
// 					</div>
// 				)}
// 			</div>

			
// 			{/* Renderizzo i children passati al componente, per una composizione più flessibile */}
// 			{props.children}
// 			{/* Parte inferiore del componente che contiene un link per mostrare tutte le entità di un certo tipo, ad esempio tutti i post o esperienze */}
// 			<div className="text-center border-top p-2">
// 				<a href="" className="text-black text-decoration-none">
// 					<span>Show all {props.title} </span>
// 					{/* Icona ArrowRight */}
// 					<ArrowRight />
// 				</a>
// 			</div>
// 		</div>
// 	);
// };

// export default UserInfoCards;
