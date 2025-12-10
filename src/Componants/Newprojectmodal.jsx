import React, { useState } from 'react';
import './NewProjectModal.css';

const NewProjectModal = ({ isOpen, onClose, onSave }) => {
  const [language, setLanguage] = useState('english');
  const [formData, setFormData] = useState({
    titleEn: '',
    titleAr: '',
    shortDescEn: '',
    shortDescAr: '',
    fullDescEn: '',
    fullDescAr: '',
    category: '',
    tags: '',
    imageUrl: '',
    imageAlt: '',
    projectUrl: '',
    seoTitle: '',
    metaDesc: '',
    urlSlug: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.titleEn || !formData.shortDescEn) {
      alert('Please fill in required fields (English Title and Short Description)');
      return;
    }

    // Create project object
    const newProject = {
      id: Date.now(),
      image: formData.imageUrl || '/default-project.png',
      title: formData.titleEn,
      titleAr: formData.titleAr,
      description: formData.shortDescEn,
      descriptionAr: formData.shortDescAr,
      fullDescription: formData.fullDescEn,
      fullDescriptionAr: formData.fullDescAr,
      category: formData.category,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      codeLink: formData.projectUrl,
      demoLink: formData.projectUrl,
      seo: {
        title: formData.seoTitle,
        description: formData.metaDesc,
        slug: formData.urlSlug
      }
    };

    onSave(newProject);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      titleEn: '',
      titleAr: '',
      shortDescEn: '',
      shortDescAr: '',
      fullDescEn: '',
      fullDescAr: '',
      category: '',
      tags: '',
      imageUrl: '',
      imageAlt: '',
      projectUrl: '',
      seoTitle: '',
      metaDesc: '',
      urlSlug: ''
    });
    setLanguage('english');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="npm-modal-overlay" onClick={handleClose}>
      <div className="npm-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="npm-modal-content">
          <div className="npm-modal-header">
            <h2>Add New Project</h2>
            <button className="npm-close-btn" onClick={handleClose}>×</button>
          </div>

          <div className="npm-modal-body">
            {/* Language Toggle */}
            <div className="npm-language-toggle">
              <button
                className={`npm-lang-btn ${language === 'english' ? 'active' : ''}`}
                onClick={() => setLanguage('english')}
              >
                English
              </button>
              <button
                className={`npm-lang-btn ${language === 'arabic' ? 'active' : ''}`}
                onClick={() => setLanguage('arabic')}
              >
                العربية
              </button>
            </div>

            {/* English Fields */}
            {language === 'english' && (
              <div className="npm-language-section">
                <div className="npm-form-group">
                  <label>Project Title (English) *</label>
                  <input
                    type="text"
                    name="titleEn"
                    value={formData.titleEn}
                    onChange={handleInputChange}
                    placeholder="Enter project title in English..."
                    className="npm-input"
                  />
                </div>

                <div className="npm-form-group">
                  <label>Short Description (English) *</label>
                  <textarea
                    name="shortDescEn"
                    value={formData.shortDescEn}
                    onChange={handleInputChange}
                    placeholder="Brief project description..."
                    className="npm-textarea npm-textarea-short"
                    rows="3"
                  />
                </div>

                <div className="npm-form-group">
                  <label>Full Description (English)</label>
                  <div className="npm-editor-toolbar">
                    <button type="button" title="Heading"><i className="icon-h"></i>H</button>
                    <button type="button" title="Bold"><strong>B</strong></button>
                    <button type="button" title="Italic"><em>I</em></button>
                    <button type="button" title="Underline"><u>U</u></button>
                    <button type="button" title="Strikethrough"><s>S</s></button>
                    <button type="button" title="List">≡</button>
                    <button type="button" title="Align">⊟</button>
                    <button type="button" title="Align">≣</button>
                    <button type="button" title="Link">🔗</button>
                    <button type="button" title="Code">{'< >'}</button>
                  </div>
                  <textarea
                    name="fullDescEn"
                    value={formData.fullDescEn}
                    onChange={handleInputChange}
                    placeholder="Detailed project description..."
                    className="npm-textarea npm-textarea-tall"
                    rows="6"
                  />
                  <small className="npm-hint">Use H1, H2, H3 headings for proper content hierarchy</small>
                </div>
              </div>
            )}

            {/* Arabic Fields */}
            {language === 'arabic' && (
              <div className="npm-language-section">
                <div className="npm-form-group">
                  <label>عنوان المشروع (بالعربية)</label>
                  <input
                    type="text"
                    name="titleAr"
                    value={formData.titleAr}
                    onChange={handleInputChange}
                    placeholder="أدخل عنوان المشروع بالعربية..."
                    className="npm-input npm-rtl"
                  />
                </div>

                <div className="npm-form-group">
                  <label>وصف مختصر (بالعربية)</label>
                  <textarea
                    name="shortDescAr"
                    value={formData.shortDescAr}
                    onChange={handleInputChange}
                    placeholder="وصف موجز للمشروع..."
                    className="npm-textarea npm-textarea-short npm-rtl"
                    rows="3"
                  />
                </div>

                <div className="npm-form-group">
                  <label>الوصف الكامل (بالعربية)</label>
                  <div className="npm-editor-toolbar">
                    <button type="button" title="Heading"><i className="icon-h"></i>H</button>
                    <button type="button" title="Bold"><strong>B</strong></button>
                    <button type="button" title="Italic"><em>I</em></button>
                    <button type="button" title="Underline"><u>U</u></button>
                    <button type="button" title="Strikethrough"><s>S</s></button>
                    <button type="button" title="List">≡</button>
                    <button type="button" title="Align">⊟</button>
                    <button type="button" title="Align">≣</button>
                    <button type="button" title="Link">🔗</button>
                    <button type="button" title="Code">{'< >'}</button>
                  </div>
                  <textarea
                    name="fullDescAr"
                    value={formData.fullDescAr}
                    onChange={handleInputChange}
                    placeholder="وصف تفصيلي للمشروع..."
                    className="npm-textarea npm-textarea-tall npm-rtl"
                    rows="6"
                  />
                  <small className="npm-hint npm-rtl">استخدم عناوين H1, H2, H3 للتسلسل الهرمي الصحيح للمحتوى</small>
                </div>
              </div>
            )}

            {/* Category & Tags */}
            <div className="npm-row">
              <div className="npm-form-group npm-half">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="e.g., Web Development"
                  className="npm-input"
                />
              </div>
              <div className="npm-form-group npm-half">
                <label>Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="React, TypeScript, Node.js"
                  className="npm-input"
                />
              </div>
            </div>

            {/* Image & Media */}
            <div className="npm-section-title">Image & Media</div>

            <div className="npm-form-group">
              <label>Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
                className="npm-input"
              />
            </div>

            <div className="npm-form-group">
              <label>Image Alt Text</label>
              <input
                type="text"
                name="imageAlt"
                value={formData.imageAlt}
                onChange={handleInputChange}
                placeholder="Descriptive alt text for accessibility..."
                className="npm-input"
              />
              <small className="npm-hint">Required for SEO and accessibility</small>
            </div>

            <div className="npm-form-group">
              <label>Project URL</label>
              <input
                type="text"
                name="projectUrl"
                value={formData.projectUrl}
                onChange={handleInputChange}
                placeholder="https://example.com"
                className="npm-input"
              />
            </div>

            {/* SEO Optimization */}
            <div className="npm-section-title">SEO Optimization</div>

            <div className="npm-form-group">
              <label>SEO Title (Page {'<title>'} Tag)</label>
              <input
                type="text"
                name="seoTitle"
                value={formData.seoTitle}
                onChange={handleInputChange}
                placeholder="Optimized title for search engines..."
                className="npm-input"
              />
              <small className="npm-hint">0/{formData.seoTitle.length} characters (optimal: 50-60)</small>
            </div>

            <div className="npm-form-group">
              <label>Meta Description</label>
              <textarea
                name="metaDesc"
                value={formData.metaDesc}
                onChange={handleInputChange}
                placeholder="Brief description for search engine results..."
                className="npm-textarea npm-textarea-short"
                rows="3"
              />
              <small className="npm-hint">0/{formData.metaDesc.length} characters (optimal: 150-160)</small>
            </div>

            <div className="npm-form-group">
              <label>URL Slug</label>
              <input
                type="text"
                name="urlSlug"
                value={formData.urlSlug}
                onChange={handleInputChange}
                placeholder="project-url-slug"
                className="npm-input"
              />
              <small className="npm-hint">Preview: /projects/{formData.urlSlug || 'your-slug'}</small>
            </div>
          </div>

          <div className="npm-modal-footer">
            <button className="npm-btn npm-btn-primary" onClick={handleSubmit}>
              <span className="npm-btn-icon">💾</span>
              Save Project
            </button>
            <button className="npm-btn npm-btn-secondary" onClick={handleClose}>
              <span className="npm-btn-icon">✕</span>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectModal;