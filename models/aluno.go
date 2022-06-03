package models

import (
	"gopkg.in/validator.v2"
	"gorm.io/gorm"
)

type Aluno struct {
	gorm.Model
	Nome string `form:"nome" validate:"nonzero" json:"nome" uri:"nome"`
	CPF  string `form:"cpf" validate:"len=11, regexp=^[0-9]*$" json:"cpf" uri:"cpf"`
	RG   string `form:"rg" validate:"len=9, regexp=^[0-9]*$" json:"rg" uri:"rg"`
}

var Alunos []Aluno

func ValidaDadosDealunos(aluno *Aluno) error {

	if err := validator.Validate(aluno); err != nil {
		return err
	}

	return nil

}
