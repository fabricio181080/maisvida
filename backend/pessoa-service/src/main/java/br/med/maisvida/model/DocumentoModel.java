package br.med.maisvida.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
 
@Table(name="tb_documento")
@Entity
public class DocumentoModel {
 
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="id_documento")
	private Long codigo;

	@ManyToOne
	@JoinColumn(name = "id_pessoa")
	private PessoaModel pessoa;
 
	@Column(name="ds_tipo")
	private String  tipo;
	
	@Column(name="ds_numero")
	private String  numero;
 
	public Long getCodigo() {
		return codigo;
	}
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	public PessoaModel getPessoa() {
		return pessoa;
	}
	public void setPessoa(PessoaModel pessoa) {
		this.pessoa = pessoa;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	
}