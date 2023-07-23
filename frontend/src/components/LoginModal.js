import { Row, Form, Button } from 'react-bootstrap';
import styles from './LoginModal.module.css';

const LoginModal = () => {
	return (
		<>
			<div className={styles['login-modal']}>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Usuario</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">Si no se acuerda el usuario, manéjese</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Contraseña</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Ingresar
					</Button>
				</Form>
			</div>
		</>
	);
};

export default LoginModal;
