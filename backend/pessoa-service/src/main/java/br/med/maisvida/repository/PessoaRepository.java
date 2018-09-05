package br.med.maisvida.repository;

import org.springframework.data.repository.CrudRepository;

import br.med.maisvida.model.PessoaModel;

public interface PessoaRepository extends CrudRepository<PessoaModel, Long> {
 

}