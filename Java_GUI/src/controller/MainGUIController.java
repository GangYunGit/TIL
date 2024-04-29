package controller;

import java.net.URL;
import java.util.ResourceBundle;

import javafx.fxml.Initializable;
import javafx.fxml.FXML;
import javafx.scene.control.Button;

public class MainGUIController implements Initializable {
	
	@FXML
	private Button buttonTest;
	
	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		
		buttonTest.setOnMouseClicked( event -> {
			System.out.println("test");
		});
	}
	
}