package br.med.maisvida.repository;

import org.springframework.data.repository.CrudRepository;

import br.med.maisvida.model.DocumentoModel;

public interface DocumentoRepository extends CrudRepository<DocumentoModel, Long> {
 

}