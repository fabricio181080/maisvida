package br.med.maisvida.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
 
@Table(name="tb_pessoa")
@Entity
public class PessoaModel {
 
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="id_pessoa")
	private Long codigo;
 
	@ManyToOne
	@JoinColumn(name = "id_estado")
	private EstadoModel estado;
	
	@Column(name="ds_nome")
	private String  nome;
 
	public Long getCodigo() {
		return codigo;
	}
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public EstadoModel getEstado() {
		return estado;
	}
	public void setEstado(EstadoModel estado) {
		this.estado = estado;
	}
 
}